export const log = ({
  message,
  flavor = "log",
}: {
  message: string;
  flavor?: "log" | "warn";
}) => {
  const turnLogsOn = true;
  if (turnLogsOn) {
    switch (flavor) {
      case "log":
        return console.log(message);

      case "warn":
        return console.warn(message);

      default:
        return console.log(message);
    }
  }
};
