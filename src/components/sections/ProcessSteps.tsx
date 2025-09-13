import { ReactNode } from "react";
import { Card } from "@/components/ui/card";

interface Step {
  title: string;
  description: string;
  icon: ReactNode;
}

interface ProcessStepsProps {
  steps: Step[];
}

export default function ProcessSteps({ steps }: ProcessStepsProps) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {steps.map((step, index) => (
        <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
            {step.icon}
          </div>
          <h3 className="font-semibold text-lg mb-2">
            Étape {index + 1}: {step.title}
          </h3>
          <p className="text-gray-600 text-sm">{step.description}</p>
        </Card>
      ))}
    </div>
  );
}
