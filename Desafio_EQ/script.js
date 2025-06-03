function formarGrupos(listaDeNomes, tamanhoGrupo) {
    const grupos = [];
    const nomes = [...listaDeNomes];
  
    for (let i = 0; i < nomes.length; i += tamanhoGrupo) {
      const grupo = nomes.slice(i, i + tamanhoGrupo);
      grupos.push(grupo);
    }
  
    let grupoDeApoio = null;
    if (grupos.length > 0 && grupos[grupos.length - 1].length < tamanhoGrupo) {
      grupoDeApoio = grupos.pop();
    }
  
    return { grupos, grupoDeApoio };
  }
  
  function gerarGrupos() {
    const entradaNomes = document.getElementById("nomes").value;
    const tamanhoGrupo = parseInt(document.getElementById("tamanhoGrupo").value);
  
    if (!entradaNomes.trim() || isNaN(tamanhoGrupo) || tamanhoGrupo < 1) {
      alert("Por favor, insira a lista de nomes e um tamanho de grupo válido.");
      return;
    }
  
    const nomes = entradaNomes
      .split(/[\n,]+/)
      .map(nome => nome.trim())
      .filter(nome => nome);
  
    const resultado = formarGrupos(nomes, tamanhoGrupo);
    const container = document.getElementById("gruposContainer");
    container.innerHTML = ""; 
  
    resultado.grupos.forEach((grupo, i) => {
      const div = document.createElement("div");
      div.className = "card";
      div.innerHTML = `<h2>Grupo ${i + 1}</h2><ul>${grupo.map(nome => `<li>${nome}</li>`).join("")}</ul>`;
      container.appendChild(div);
    });
  
    if (resultado.grupoDeApoio) {
      const div = document.createElement("div");
      div.className = "card apoio";
      div.innerHTML = `<h2>Grupo de Apoio</h2><ul>${resultado.grupoDeApoio.map(nome => `<li>${nome}</li>`).join("")}</ul>`;
      container.appendChild(div);
    }
  }
  