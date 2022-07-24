import { useEffect, useState } from 'react';

interface TimerProps {
  from: Date;
  children?: JSX.Element;
}

const Timer = (props: TimerProps) => {
  const { from = new Date('22-7-18'), children } = props;

  const calculateTimeLeft = () => {
    const difference = +from - +new Date();
    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timeout = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timeout);
  });

  const timerComponents = [];

  for (const interval in timeLeft) {
    const value = timeLeft[interval as keyof typeof timeLeft];

    timerComponents.push(
      <div className="mx-3 text-center" key={interval}>
        <div className="flex justify-center items-center bg-[#ffffff33] border border-white w-12 h-12 mb-2 text-center rounded-lg  mx-auto shadow-2xl">
          <p className="text-white font-semibold md:text-lg">{value}</p>
        </div>

        <p className="text-white font-semibold md:text-lg">
          <span className="block md:hidden">{interval.charAt(0)}</span>
          <span className="hidden md:block">{interval}</span>
        </p>
      </div>,
    );
  }

  return (
    <div className="flex items-center justify-center md:justify-start p-4">
      {timerComponents.length ? timerComponents : <div>{children}</div>}
    </div>
  );
};

export default Timer;
