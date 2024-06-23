import React, { ReactNode, useState } from "react";
import { Button, Divider, Input, Modal } from "antd";
import { CustomJalaliCalendar } from "../calendar";

interface IDatePicker {
  header?: ReactNode;
  preview?: boolean;
  previewClassName?: string;
  inputClassName?: string;
  buttonText?: string;
  inputSuffix?: ReactNode;
  inputPrefix?: ReactNode;
  selectedDate?: string;
  changeDate?: (date: string) => void;
  modalWidth?: string;
  previewStyles?: { [key: string]: React.CSSProperties };
  maxMonth?: number;
  value?: string;
  setValue?: (value: string) => void;
  initialDay?: number;
  initialMonth?: number;
  initialYear?: number;
}

export const DatePicker: React.FC<IDatePicker> = ({
  header,
  preview,
  previewClassName,
  inputClassName,
  buttonText,
  inputSuffix,
  inputPrefix,
  selectedDate,
  changeDate,
  modalWidth,
  previewStyles,
  value,
  setValue,
  initialDay,
  initialMonth,
  initialYear,
}) => {
  const [open, setOpen] = useState<boolean>(false);
  const handleClickSubmit = () => {
    setValue && setValue(selectedDate!);
    setOpen(false);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "50px",
      }}
    >
      <Input
        className={inputClassName}
        onClick={() => setOpen(true)}
        value={value && value}
        prefix={inputPrefix}
        suffix={inputSuffix}
        type="none"
        readOnly
      />
      <Modal
        title={header}
        open={open}
        footer={false}
        onCancel={() => setOpen(false)}
        width={modalWidth}
      >
        <div>
          <Divider style={{ margin: "5px" }} />
          <CustomJalaliCalendar
            initialDay={initialDay!}
            initialMonth={initialMonth!}
            initialYear={initialYear!}
            onDateChange={changeDate}
          />
          <Divider style={{ margin: "5px" }} />
        </div>
        {preview && (
          <div
            className={previewClassName}
            style={{
              ...previewStyles,
              marginTop: "16px",
              textAlign: "center",
              color: "#000",
            }}
          >
            {selectedDate}
          </div>
        )}
        <div style={{ width: "100%" }}>
          <Button
            onClick={handleClickSubmit}
            style={{
              width: "100%",
              background: "#18836C",
              color: "#FFF",
              height: "49px",
              marginTop: "16px",
            }}
          >
            {buttonText}
          </Button>
        </div>
      </Modal>
    </div>
  );
};
