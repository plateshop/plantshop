import React from "react";

interface TabProps {
  label: string;
  onClick: () => void;
}

const Tab: React.FC<TabProps> = ({ label, onClick }) => {
  return (
    <button className="tab" onClick={onClick}>
      {label}
    </button>
  );
};

export default Tab;
