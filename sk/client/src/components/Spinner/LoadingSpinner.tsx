import * as React from "react";
import { Spinner, SpinnerSize } from "@fluentui/react/lib/Spinner";
import { IStackProps, Stack } from "@fluentui/react/lib/Stack";

export const LoadingSpinner: React.FunctionComponent = () => {
  // This is just for laying out the label and spinner (spinners don't have to be inside a Stack)
  const rowProps: IStackProps = {
    horizontal: true,
    verticalAlign: "center",
    horizontalAlign: "center",
  };

  const tokens = {
    spinnerStack: {
      padding: 120,
    },
  };

  return (
    <Stack {...rowProps} tokens={tokens.spinnerStack}>
      <Spinner size={SpinnerSize.large} label="Loading" />
    </Stack>
  );
};
