"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Award,
  Building,
  Calendar,
  CheckCircle,
  FileText,
  Presentation,
  UserCheck,
  Users,
} from "lucide-react";
import { motion, useInView } from "motion/react";
import { JSX, useRef } from "react";

interface StepType {
  id: number;
  title: string;
  description: string;
  icon: JSX.Element;
  iconLabel: string;
  listItems?: string[];
}

const TimelineStep = ({ step, index }: { step: StepType; index: number }) => {
  const ref = useRef(null);
  const isVisible = useInView(ref, { once: true, amount: 0.3 });

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } },
  };

  // The text content for the step
  const TextContent = (
    <motion.div
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={fadeInUp}
      className="text-title-3"
    >
      <h3 className="text-title-1 font-bold mb-3 text-main">{step.title}</h3>
      <p className="text-gray-600">{step.description}</p>
      {step.listItems && (
        <ul className="text-gray-600 list-disc mt-2 text-right">
          {step.listItems.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      )}
    </motion.div>
  );

  // The icon card for the step
  const IconCard = (
    <Card className="p-0 overflow-hidden">
      <motion.div
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={fadeInUp}
        className="bg-white p-4 inline-flex items-center"
      >
        <div className="bg-main/10 border rounded-full p-3 mr-4">
          {step.icon}
        </div>
        <span className="font-medium text-title-2 text-main">
          {step.iconLabel}
        </span>
      </motion.div>
    </Card>
  );

  return (
    <div
      ref={ref}
      className="relative mb-10 md:mb-16 grid max-md:grid-rows-3 w-full items-center max-md:gap-5 md:grid-cols-[1fr_48px_1fr]"
    >
      <div
        className={`w-full text-center max-md:order-2 max-md:bg-background ${
          index % 2 === 0
            ? "order-0 pr-0 md:pr-8 md:text-right"
            : "order-2 pl-0 md:pl-8 md:text-left"
        }`}
      >
        {TextContent}
      </div>
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={
          isVisible ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }
        }
        transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
        className="z-10 bg-main rounded-full p-2 h-12 justify-self-center w-12 flex items-center justify-center shadow-lg max-md:order-0 order-1"
      >
        <span className="text-white font-bold">{step.id}</span>
      </motion.div>
      <div
        className={`w-full text-center max-md:order-0 ${
          index % 2 !== 0
            ? "order-0 pr-0 md:pr-8 md:text-right"
            : "order-2 pl-0 md:pl-8 md:text-left"
        }`}
      >
        {IconCard}
      </div>

      {/* Center number circle */}
    </div>
  );
};

const PlacementProcedure = () => {
  const steps = [
    {
      id: 1,
      title: "Placement Initialization",
      description:
        "The placement process begins with initialization by the placement cell.",
      icon: <CheckCircle className="text-main" size={24} />,
      iconLabel: "Start of Placement Season",
    },
    {
      id: 2,
      title: "Company Workflow",
      description:
        "The company submits Job description, job details, and campus visit dates.",
      icon: <UserCheck className="text-main" size={24} />,
      iconLabel: "Company Workflow",
    },
    {
      id: 3,
      title: "Company Details Submission",
      description: "Pre placement talk is conducted.",
      icon: <Building className="text-main" size={24} />,
      iconLabel: "Company Details Submission",
    },
    {
      id: 4,
      title: "Assessments",
      description:
        "Online/Offline test, GDs, interviews are conducted as per the mutually agreed dates by the institute and the company.",
      icon: <Calendar className="text-main" size={24} />,
      iconLabel: "Assessments",
    },
    {
      id: 5,
      title: "Selection Announcement",
      description: "Companies provide a list of selected students to the CGC.",
      icon: <Users className="text-main" size={24} />,
      iconLabel: "Selection Announcement",
    },
    {
      id: 6,
      title: "Campus Visit",
      description: "Selected Students List.",
      icon: <Users className="text-main" size={24} />,
      iconLabel: "Campus Visit",
    },
    {
      id: 7,
      title: "Result Declaration",
      description: "Results are declared in two ways:",
      icon: <FileText className="text-main" size={24} />,
      iconLabel: "Results Distribution",
      listItems: [
        "Same day result: Offer letters directly to students",
        "Delayed result: Offer letters through CGC",
      ],
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="pt-20 pb-16 w-[87.5vw] max-w-[1680px] mx-auto"
      id="placement-procedure"
    >
      <motion.h1
        initial={{ y: -30 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
        className="text-main-title font-bold text-center text-primary mb-16 relative"
      >
        <span className="relative inline-block">PLACEMENT PROCEDURE</span>
      </motion.h1>

      <div className="relative">
        {/* Vertical timeline line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-main/50"></div>

        {/* Timeline steps */}
        {steps.map((step, index) => (
          <TimelineStep key={step.id} step={step} index={index} />
        ))}

        {/* Final step */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col items-center mt-12 relative z-10"
        >
          <motion.div
            initial={{ rotate: -90, scale: 0 }}
            animate={{ rotate: 0, scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            className="bg-main rounded-full p-2 h-12 w-12 flex items-center justify-center shadow-lg mb-4"
          >
            <Award className="text-white" size={20} />
          </motion.div>
          <div className="text-center bg-background max-w-md mx-auto px-4">
            <h3 className="text-title-1 font-bold mb-3 text-main">
              Placement Procedure Ends
            </h3>
            <p className="text-gray-600">
              The placement process concludes when students receive their final
              offer letters.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Results Declaration Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="mt-24"
      >
        <Card className="shadow-lg !bg-white">
          <CardHeader>
            <CardTitle className="font-bold text-title-1 text-center text-main">
              Result Declaration Options
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="bg-main/10 p-3 border rounded-full mr-4">
                    <Presentation className="text-main" size={24} />
                  </div>
                  <h4 className="text-title-1 text-main font-semibold">
                    Same Day Result
                  </h4>
                </div>
                <p className="text-gray-600 text-title-3 font-normal">
                  Companies that provide immediate results directly issue offer
                  letters to selected students on the same day of interviews.
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="bg-main/10 p-3 border rounded-full mr-4">
                    <Building className="text-main" size={24} />
                  </div>
                  <h4 className="text-title-1 text-main font-semibold">
                    Delayed Result
                  </h4>
                </div>
                <p className="text-gray-600 text-title-3 font-normal">
                  Some companies declare results later. In such cases, offer
                  letters are distributed through the CGC to the selected
                  students.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
};

export default PlacementProcedure;
