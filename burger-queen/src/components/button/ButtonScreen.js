
export function boton() {
  const actualizar = () => {
    fetch('http://localhost:8080/')
      .then(response => response.json())
      .then(data => {
       console.log(data);
      });  
  }
  return (
    <div className="btn">
      <button onClick={actualizar}>click</button>
    </div>
  );
}
