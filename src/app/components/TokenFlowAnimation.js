import React, { useRef, useEffect, useState } from 'react';
import { CheckCircle2, Target, Settings, Users, Zap } from 'lucide-react';

const steps = [
  { title: 'Assessment', subtitle: 'Site Review', icon: Target },
  { title: 'Installation', subtitle: 'Deployment', icon: Settings },
  { title: 'Training', subtitle: 'Staff Onboarding', icon: Users },
  { title: 'Go Live', subtitle: 'Support Active', icon: Zap },
];

/** Smooth loop from 0→1 with a pause at the end */
function useLoopProgress(duration = 10000, pauseAfter = 1000) {
  const [progress, setProgress] = useState(0); // 0..1
  const rafRef = useRef();
  const startRef = useRef();
  const pauseTimeoutRef = useRef(null);

  useEffect(() => {
    let paused = false;

    const tick = (ts) => {
      if (!startRef.current) startRef.current = ts;
      const elapsed = ts - startRef.current;
      const raw = elapsed / duration;

      if (raw >= 1 && !paused) {
        paused = true;
        setProgress(1);
        cancelAnimationFrame(rafRef.current);
        pauseTimeoutRef.current = setTimeout(() => {
          startRef.current = null;
          paused = false;
          rafRef.current = requestAnimationFrame(tick);
        }, pauseAfter);
        return;
      }

      setProgress(Math.min(raw, 1));
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(rafRef.current);
      clearTimeout(pauseTimeoutRef.current);
    };
  }, [duration, pauseAfter]);

  return progress;
}

/** Illuminate steps at their physical positions: 0%, 33.3%, 66.6%, 100% (final at ≥98%) */
function useStepActivation(percent, total) {
  const stepPositions = Array.from({ length: total }, (_, i) =>
    (i / (total - 1)) * 100
  );
  let currentStepIndex = stepPositions.findIndex((p) => percent < p) - 1;
  if (percent >= 98) currentStepIndex = total - 1; // reliable final activation
  currentStepIndex = Math.max(0, Math.min(currentStepIndex, total - 1));
  return { currentStepIndex, stepPositions };
}

export default function TokenFlowAnimation() {
  const progress = useLoopProgress(10000, 1000); // 10s loop, 1s pause
  const percent = progress * 100;
  const { currentStepIndex, stepPositions } = useStepActivation(percent, steps.length);

  return (
    <div className="w-full mx-auto max-w-4xl">
      {/* Title + subtitle */}
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-slate-800">System Activation Flow</h3>
        <p className="text-slate-600">Visualizing your implementation journey</p>
      </div>

      {/* Mobile: Vertical */}
      <div className="md:hidden">
        <VerticalFlow
          steps={steps}
          percent={percent}
          currentStepIndex={currentStepIndex}
          stepPositions={stepPositions}
        />
      </div>

      {/* Tablet/Desktop: Horizontal */}
      <div className="hidden md:block">
        <HorizontalFlow
          steps={steps}
          percent={percent}
          currentStepIndex={currentStepIndex}
        />
      </div>
    </div>
  );
}

/* -------------------- Vertical (mobile) -------------------- */
function VerticalFlow({ steps, percent, currentStepIndex, stepPositions }) {
  return (
    <div className="relative bg-white border border-slate-200 rounded-lg shadow-sm p-6">
      <div className="grid grid-cols-[32px_1fr] gap-4">
        {/* Left rail */}
        <div className="relative">
          {/* Full line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-slate-200 rounded-full" />
          {/* Progress line */}
          <div
            className="absolute left-1/2 -translate-x-1/2 top-0 w-0.5 bg-slate-700 rounded-full"
            style={{ height: `${percent}%` }}
          />
          {/* Step dots */}
          {stepPositions.map((p, i) => (
            <div
              key={i}
              className={`absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full border-2
                ${i <= currentStepIndex ? 'bg-slate-700 border-slate-700' : 'bg-white border-slate-300'}
              `}
              style={{ top: `${p}%`, transform: 'translate(-50%, -50%)' }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative">
          {steps.map((step, i) => {
            const isCompleted = i < currentStepIndex;
            const isActive = i === currentStepIndex;
            const Icon = step.icon;
            return (
              <div key={i} className="mb-8 last:mb-0">
                <div className="flex items-start gap-3">
                  <div
                    className={`mt-[-6px] w-10 h-10 flex items-center justify-center rounded-full border-2 transition-all duration-300
                      ${
                        isCompleted
                          ? 'bg-slate-700 border-slate-700 text-white'
                          : isActive
                          ? 'bg-white border-slate-700 text-slate-700 shadow'
                          : 'bg-white border-slate-300 text-slate-400'
                      }`}
                  >
                    {isCompleted ? <CheckCircle2 className="w-5 h-5" /> : <Icon className="w-5 h-5" />}
                  </div>
                  <div>
                    <div className={`text-sm font-semibold ${isCompleted || isActive ? 'text-slate-800' : 'text-slate-400'}`}>
                      {step.title}
                    </div>
                    <div className={`text-xs ${isCompleted || isActive ? 'text-slate-600' : 'text-slate-400'}`}>
                      {step.subtitle}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Current step pill */}
      <div className="mt-6 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-100 border border-slate-200 rounded-full">
          <div className="w-2 h-2 bg-slate-700 rounded-full animate-pulse" />
          <span className="text-xs font-medium text-slate-700">
            Currently: {steps[currentStepIndex].title} — {steps[currentStepIndex].subtitle}
          </span>
        </div>
      </div>
    </div>
  );
}

/* -------------------- Horizontal (md+) -------------------- */
function HorizontalFlow({ steps, percent, currentStepIndex }) {
  return (
    <div className="relative bg-white border border-slate-200 rounded-lg shadow-sm p-8">
      {/* Rail (background + progress) */}
      <div className="px-6">
        <div className="relative w-full">
          {/* Background line */}
          <div className="h-0.5 bg-slate-200 rounded-full w-full" />
          {/* Progress line */}
          <div
            className="absolute top-0 left-0 h-0.5 bg-slate-700 rounded-full"
            style={{ width: `${percent}%` }}
          />
        </div>
      </div>

      {/* Steps */}
      <div className="relative flex justify-between items-start px-6 mt-[-8px]">
        {steps.map((step, i) => {
          const isCompleted = i < currentStepIndex;
          const isActive = i === currentStepIndex;
          const Icon = step.icon;

          return (
            <div key={i} className="flex flex-col items-center text-center">
              {/* small dot that sits on the rail */}
              <div
                className={`w-3 h-3 rounded-full border-2 mb-2 ${
                  i <= currentStepIndex ? 'bg-slate-700 border-slate-700' : 'bg-white border-slate-300'
                }`}
              />
              {/* main step icon */}
              <div
                className={`w-12 h-12 mb-2 flex items-center justify-center rounded-full border-2 transition-all duration-300
                  ${
                    isCompleted
                      ? 'bg-slate-700 border-slate-700 text-white'
                      : isActive
                      ? 'bg-white border-slate-700 text-slate-700 shadow'
                      : 'bg-white border-slate-300 text-slate-400'
                  }`}
              >
                {isCompleted ? <CheckCircle2 className="w-6 h-6" /> : <Icon className="w-5 h-5" />}
              </div>
              <div className={`text-sm font-medium ${isCompleted || isActive ? 'text-slate-800' : 'text-slate-400'}`}>
                {step.title}
              </div>
              <div className={`text-xs ${isCompleted || isActive ? 'text-slate-600' : 'text-slate-400'}`}>
                {step.subtitle}
              </div>
            </div>
          );
        })}
      </div>

      {/* Current step pill */}
      <div className="mt-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-full border border-slate-200">
          <div className="w-2 h-2 bg-slate-700 rounded-full animate-pulse" />
          <span className="text-sm font-medium text-slate-700">
            Currently: {steps[currentStepIndex].title} — {steps[currentStepIndex].subtitle}
          </span>
        </div>
      </div>
    </div>
  );
}
