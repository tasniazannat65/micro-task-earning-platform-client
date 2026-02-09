import React from "react";

const LoadingSpinner = ({ size = 72, variant = "default" }) => {
  if (variant === "default") {
    return (
      <div className="min-h-screen flex items-center justify-center w-full py-16">
        <div className="relative" style={{ width: size, height: size }}>
          <svg
            width={size}
            height={size}
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
            className="animate-spin absolute inset-0"
          >
            {/* Faded background ring */}
            <circle
              cx="50"
              cy="50"
              r="45"
              stroke="currentColor"
              strokeWidth="4"
              fill="none"
              className="text-base-300"
            />

            {/* Animated gradient arc - primary color */}
            <circle
              cx="50"
              cy="50"
              r="45"
              stroke="currentColor"
              strokeWidth="6"
              fill="none"
              strokeDasharray="70 212"
              strokeLinecap="round"
              className="text-primary"
            />
          </svg>

          {/* Center coin with pulse */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              {/* Pulsing glow */}
              <div
                className="absolute inset-0 rounded-full bg-primary/30 blur-md animate-pulse"
                style={{
                  width: size * 0.4,
                  height: size * 0.4,
                  margin: "auto",
                }}
              />

              {/* Coin circle */}
              <div
                className="relative flex items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary shadow-xl"
                style={{ width: size * 0.4, height: size * 0.4 }}
              >
                <span
                  className="text-white font-bold"
                  style={{ fontSize: size * 0.18 }}
                >
                  $
                </span>
              </div>
            </div>
          </div>

          {/* Orbiting particles */}
          <div
            className="absolute inset-0 animate-spin"
            style={{ animationDuration: "3s" }}
          >
            <div className="absolute top-0 left-1/2 w-2 h-2 bg-primary rounded-full -translate-x-1/2 shadow-lg shadow-primary/50" />
          </div>
          <div
            className="absolute inset-0 animate-spin"
            style={{ animationDuration: "2s", animationDirection: "reverse" }}
          >
            <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-secondary rounded-full -translate-x-1/2 shadow-lg shadow-secondary/50" />
          </div>
        </div>
      </div>
    );
  }

  // Pulse variant - Multiple expanding rings
  if (variant === "pulse") {
    return (
      <div className="flex items-center justify-center w-full py-16">
        <div className="relative" style={{ width: size, height: size }}>
          {/* Multiple pulsing rings */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="absolute w-full h-full rounded-full border-4 border-primary animate-ping opacity-75" />
            <div
              className="absolute w-full h-full rounded-full border-4 border-secondary animate-ping opacity-50"
              style={{ animationDelay: "0.5s" }}
            />
            <div
              className="absolute w-3/4 h-3/4 rounded-full border-4 border-primary animate-ping opacity-25"
              style={{ animationDelay: "1s" }}
            />
          </div>

          {/* Center icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-1/2 h-1/2 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-xl animate-pulse">
              <div
                className="text-white font-bold"
                style={{ fontSize: size * 0.2 }}
              >
                $
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Dots variant - Bouncing dots
  if (variant === "dots") {
    return (
      <div className="flex items-center justify-center w-full py-16 gap-2">
        <div className="w-3 h-3 rounded-full bg-primary animate-bounce shadow-lg shadow-primary/50" />
        <div
          className="w-3 h-3 rounded-full bg-secondary animate-bounce shadow-lg shadow-secondary/50"
          style={{ animationDelay: "0.1s" }}
        />
        <div
          className="w-3 h-3 rounded-full bg-success animate-bounce shadow-lg shadow-success/50"
          style={{ animationDelay: "0.2s" }}
        />
        <div
          className="w-3 h-3 rounded-full bg-primary animate-bounce shadow-lg shadow-primary/50"
          style={{ animationDelay: "0.3s" }}
        />
      </div>
    );
  }

  // Bars variant - Loading bars
  if (variant === "bars") {
    return (
      <div className="flex items-center justify-center w-full py-16 gap-1.5">
        {[0, 1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="w-2 rounded-full bg-gradient-to-t from-primary to-secondary shadow-lg animate-pulse"
            style={{
              height: size * 0.6,
              animationDelay: `${i * 0.1}s`,
              animationDuration: "1s",
            }}
          />
        ))}
      </div>
    );
  }

  // Orbit variant - Orbiting coins
  if (variant === "orbit") {
    return (
      <div className="flex items-center justify-center w-full py-16">
        <div className="relative" style={{ width: size, height: size }}>
          {/* Center coin */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="w-1/3 h-1/3 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold shadow-xl"
              style={{ fontSize: size * 0.15 }}
            >
              $
            </div>
          </div>

          {/* Orbiting coins */}
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="absolute inset-0 animate-spin"
              style={{
                animationDuration: "2s",
                animationDelay: `${i * 0.3}s`,
              }}
            >
              <div className="absolute top-0 left-1/2 w-3 h-3 bg-secondary rounded-full -translate-x-1/2 shadow-lg shadow-secondary/50" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Spinner variant - Modern circular spinner
  if (variant === "spinner") {
    return (
      <div className="flex items-center justify-center w-full py-16">
        <div className="relative" style={{ width: size, height: size }}>
          {/* Rotating gradient spinner */}
          <svg
            width={size}
            height={size}
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
            className="animate-spin"
          >
            <circle
              cx="50"
              cy="50"
              r="40"
              stroke="currentColor"
              strokeWidth="8"
              fill="none"
              strokeLinecap="round"
              strokeDasharray="60 200"
              className="text-primary"
            />
          </svg>

          {/* Center logo */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="text-primary"
              style={{ fontSize: size * 0.3, fontWeight: "bold" }}
            >
              $
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Default fallback
  return null;
};

export default LoadingSpinner;
