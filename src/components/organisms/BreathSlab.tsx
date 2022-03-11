import { memo } from "react";
import { Button, Flex } from "theme-ui";

import { Timer } from "components/atoms";
import { BreathSlabProps } from "./BreathSlab.def";
import { Breathing, BreathingsItem, TopMenu } from "components/molecules";

const MemoizedBreathing = memo(Breathing);

export const BreathSlab: React.FC<BreathSlabProps> = ({
  breathingState,
  breathings,
  onTimerCompleted,
  onStart,
  onConfig,
}) => {
  const currentElement = () => {
    switch (breathingState) {
      case "standBy":
        return (
          <Button
            onClick={onStart}
            sx={{
              size: "60%",
              bg: "primary",
              borderRadius: "50%",
              fontSize: [6, 7, 8, 9],
              fontWeight: "bold",
              cursor: "pointer",
              color: "white",
            }}
          >
            Start
          </Button>
        );

      case "countDown":
        return (
          <Flex
            sx={{
              size: "60%",
              borderRadius: "50%",
              bg: "primary",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Timer time={3} onComplete={onTimerCompleted} />
          </Flex>
        );

      case "breathing":
        return <MemoizedBreathing breathings={breathings} />;

      default:
        return <Flex>state not found</Flex>;
    }
  };

  return (
    <Flex
      sx={{
        size: "100%",
        position: "relative",
        flexDirection: "column",
      }}
    >
      <TopMenu onConfig={onConfig} />
      <Flex sx={{ width: "100%", justifyContent: "center" }}>
        <Flex
          sx={{
            size: [6, 7, 8, 9],
            aspectRatio: "1/1",
            p: 3,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {currentElement()}
        </Flex>
      </Flex>
      <Flex sx={{ maxWidth: 10, margin: "0 auto", width: "100%" }}>
        <BreathingsItem times={[3000, 2000, 3000, 4000]} />
      </Flex>
    </Flex>
  );
};
