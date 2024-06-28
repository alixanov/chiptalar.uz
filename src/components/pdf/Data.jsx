import React from "react";
import Button from "@mui/material/Button";
import CloudDownload from "@mui/icons-material/CloudDownloadOutlined";

const DataPdf = () => {
  const downloadPdf = () => {
    // Замени URL_ТВОЕГО_PDF на фактический URL твоего PDF-файла
    const pdfUrl = process.env.PUBLIC_URL + "./Auto.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Auto.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="file-download">
      <Button
        onClick={downloadPdf} // Вызываем функцию downloadPdf при клике
        sx={{
          color: "#18c0c1",
          borderRadius: 16,
          borderWidth: 1,
          borderColor: "#18c0c1",
          "&:hover": {
            borderColor: "#18c0c1",
            borderWidth: 1,
          },
        }}
        variant="outlined"
        endIcon={<CloudDownload />}
      >
        O'quv qullanmani yuklab olish
      </Button>
    </div>
  );
};

export default DataPdf;
