function Progresso({ numeroDeDivisoes, numeroDePartesPreenchidas }) {
    // Calcula a porcentagem preenchida
    const porcentagem = (numeroDePartesPreenchidas / numeroDeDivisoes) * 100;
  
    // Cria as divisões dinamicamente
    const divisoes = Array.from({ length: numeroDeDivisoes - 1 }, (_, index) => (
      <div
        key={index}
        style={{
          ...styles.divisao,
          top: `${((index + 1) * 100) / numeroDeDivisoes}%`, // Posiciona cada divisão
        }}
      />
    ));
  
    return (
      <div style={styles.container}>
        <div style={styles.divisoesContainer}>{divisoes}</div>
        <div style={{ ...styles.barra, height: `${porcentagem}%` }} />
      </div>
    );
  }
  
  const styles = {
    container: {
      width: "20px", // Largura total
      height: "400px",
      backgroundColor: "#ddd", // Cor de fundo
      borderRadius: "5px",
      overflow: "hidden",
      margin: "0 auto",
      display: "flex",
      flexDirection: "column-reverse", // Inverte a direção do fluxo
      position: "relative", // Para posicionar as divisões corretamente
    },
    barra: {
      width: "100%", // Largura da barra
      backgroundColor: "green", // Cor do preenchimento
      transition: "height 0.3s ease-in-out", // Animação suave
      position: "relative", // Para garantir que a barra fique sobre as divisões
      zIndex: 1, // Coloca a barra acima das divisões
    },
    divisoesContainer: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      zIndex: 0, // Coloca as divisões atrás da barra
    },
    divisao: {
      position: "absolute",
      width: "100%",
      height: "1px", // Altura da divisão
      backgroundColor: "rgba(0, 0, 0, 0.2)", // Cor da divisão
    },
  };
  
  export default Progresso;