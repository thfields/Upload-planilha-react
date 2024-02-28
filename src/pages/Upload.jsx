import { useState } from "react";
import * as XLSX from 'xlsx';
import { toast } from 'react-toastify';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';



export default function Upload() {
  function sucesso(){
    toast.success("Registro enviado com sucesso!")
  } 

  const [excelFile, setExcelFile] = useState(null);
  const [typeError, setTypeError] = useState(null);
  const [excelData, setExcelData] = useState(null);

  const handleFile = (e) => {
    let fileTypes = ['application/vnd.ms-excel','application/vnd.openxmlformats-officedocument.spreadsheetml.sheet','text/csv'];
    let selectedFile = e.target.files[0];
    if (selectedFile) {
      if (selectedFile && fileTypes.includes(selectedFile.type)) {
        setTypeError(null);
        let reader = new FileReader();
        reader.readAsArrayBuffer(selectedFile);
        reader.onload = (e) => {
          setExcelFile(e.target.result);
        }
      } else {
        setTypeError('Por favor, selecione apenas arquivos no formato Excel (.xlsx)');
        setExcelFile(null);
      }
    } else {
      console.log('Por favor, selecione seu arquivo');
    }
  }
  
  const handleFileSubmit = (e) => {
    e.preventDefault();
    if (excelFile !== null) {
      const workbook = XLSX.read(excelFile,{type: 'buffer'});
      const worksheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[worksheetName];
      const data = XLSX.utils.sheet_to_json(worksheet);
      setExcelData(data.slice(0, 10)); // Exibe os dados na tela
      console.log(data.slice(0, 10)); // Exibe os dados no console
    }
  }

  return (
    <div className="fundo">

    
    <div className="wrapper">

    <Card border="primary" style={{ width: '70rem' }}>
        <Card.Header> <h1>Registro do Inventário</h1></Card.Header>
        <Card.Body>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Código do Museu*</Form.Label>
            <Form.Control as="textarea" rows={1} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>CPF do Responsável*</Form.Label>
            <Form.Control as="textarea" rows={1} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Nome do Responsável*</Form.Label>
            <Form.Control as="textarea" rows={1} />
          </Form.Group>
          <form className="form-group custom-form" onSubmit={handleFileSubmit}>
            <input type="file" className="form-control" required onChange={handleFile} />
            <button type="submit" className="btn btn-primary mt-3">Mostrar Planilha</button>
            {typeError && (
              <div className="alert alert-danger" role="alert">{typeError}</div>
            )}
          </form>
          <div className="viewer">
        {excelData ? (
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  {Object.keys(excelData[0]).map((key) => (
                    <th key={key}>{key}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {excelData.map((individualExcelData, index) => (
                  <tr key={index}>
                    {Object.keys(individualExcelData).map((key) => (
                      <td key={key}>{individualExcelData[key]}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div>Nenhum arquivo foi carregado!</div>
        )}
      </div>
      <button type="submit" className="btn btn-success mt-3" onClick={sucesso}>Enviar Registro</button>
        </Card.Body>
    </Card>
  
     


      
    </div>

    
    </div>
  );
}
