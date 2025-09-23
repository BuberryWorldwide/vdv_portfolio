import React, { useRef, useEffect, useState } from 'react';
import { CheckCircle2, Target, Settings, Users, Zap } from 'lucide-react';

const steps = [
  { title: 'Assessment', subtitle: 'Site Review', icon: Target },
  { title: 'Installation', subtitle: 'Deployment', icon: Settings },
  { title: 'Training', subtitle: 'Staff Onboarding', icon: Users },
  { title: 'Go Live', subtitle: 'Support Active', icon: Zap },
];

// Custom animation hook with pause at the end
function useLoopProgress(duration = 10000, pauseAfter = 1000) {
  const [progress, setProgress] = useState(0);
  const frameRef = useRef();
  const startRef = useRef();
  const pauseTimeoutRef = useRef(null);

  useEffect(() => {
    let paused = false;

    const tick = (timestamp) => {
      if (!startRef.current) startRef.current = timestamp;
      const elapsed = timestamp - startRef.current;
      const rawProgress = elapsed / duration;

      if (rawProgress >= 1 && !paused) {
        paused = true;
        setProgress(1);
        cancelAnimationFrame(frameRef.current);
        pauseTimeoutRef.current = setTimeout(() => {
          startRef.current = null;
          paused = false;
          frameRef.current = requestAnimationFrame(tick);
        }, pauseAfter);
        return;
      }

      const loopProgress = Math.min(rawProgress, 1);
      setProgress(loopProgress);
      frameRef.current = requestAnimationFrame(tick);
    };

    frameRef.current = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frameRef.current);
      clearTimeout(pauseTimeoutRef.current);
    };
  }, [duration, pauseAfter]);

  return progress;
}

export default function TokenFlowAnimation() {
  const progress = useLoopProgress(10000, 1000);
  const tokenPosition = progress * 100;
  const stepPositions = steps.map((_, i) => (i / (steps.length - 1)) * 100);

  let currentStepIndex = stepPositions.findIndex((p) => tokenPosition < p) - 1;
  if (tokenPosition >= 98) {
    currentStepIndex = steps.length - 1;
  }
  currentStepIndex = Math.max(0, currentStepIndex);

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-10">
      <div className="bg-white border border-slate-200 rounded-lg shadow-sm p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-slate-800 mb-2">Venue Integration Process</h3>
          <p className="text-slate-600">System activation journey</p>
        </div>

        {/* Progress Line & Steps */}
        <div className="relative">
          {/* Background Line */}
          <div className="absolute top-6 left-0 w-full h-0.5 bg-slate-200 rounded-full"></div>

          {/* Progress Line */}
          <div
            className="absolute top-6 left-0 h-0.5 bg-slate-700 rounded-full transition-all duration-300"
            style={{ width: `${tokenPosition}%` }}
          ></div>

          {/* Token */}
          <div
            className="absolute top-4"
            style={{
              left: `${tokenPosition}%`,
              transform: 'translateX(-50%)',
              zIndex: 10,
            }}
          >
            <div className="relative">
              <div className="w-4 h-4 bg-yellow-400 rounded-full shadow-md"></div>
              <div className="absolute inset-0 w-4 h-4 bg-yellow-300 rounded-full animate-ping opacity-50"></div>
            </div>
          </div>

          {/* Step Nodes */}
          <div className="flex justify-between items-start relative z-20">
            {steps.map((step, index) => {
              const isCompleted = index < currentStepIndex;
              const isActive = index === currentStepIndex;
              const Icon = step.icon;

              return (
                <div key={index} className="flex flex-col items-center text-center">
                  <div
                    className={`w-12 h-12 mb-2 flex items-center justify-center rounded-full border-2 transition-all duration-300
                      ${
                        isCompleted
                          ? 'bg-slate-700 border-slate-700 text-white'
                          : isActive
                          ? 'bg-white border-slate-700 text-slate-700 shadow-md'
                          : 'bg-white border-slate-300 text-slate-400'
                      }
                    `}
                  >
                    {isCompleted ? (
                      <CheckCircle2 className="w-6 h-6" />
                    ) : (
                      <Icon className="w-5 h-5" />
                    )}
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
        </div>

        {/* Step Label */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-full border border-slate-200">
            <div className="w-2 h-2 bg-slate-700 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-slate-700">
              Currently: {steps[currentStepIndex].title} — {steps[currentStepIndex].subtitle}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
