import React from "react";

const Card = ({ name, position, photo }) => {
  return (
    <div style={styles.card}>
      <img src={photo} alt={name} style={styles.photo} />
      <div style={styles.textContainer}>
        <h2 style={styles.name}>{name}</h2>
        <p style={styles.position}>{position}</p>
      </div>
    </div>
  );
};


const Body = () => {
  return (
    <main style={styles.body}>
      <Card name="Vladislav Namofilov" position="Team Lead" photo="/vladislavNamofilov.png" />
      <Card name="Yulia Korolova" position="Frontend developer" photo="/yuliaKorolova.png" />
      <Card name="Dmytro Pidkostelnyi" position="Back-end Developer" photo="/dmytroPidkostelnyi.png" />
      <Card name="Myshchatyn Mariia" position="UI/UX desiner" photo="/myshchatymMariia.png" />
      <Card name="Dvorytska Anastasiia" position="Project Manager" photo="/anastasiiadvorytska.png" />

    </main>
  );
};

const styles = {
  body: {
    display: "flex",
    flexWrap: "wrap",
  },
  card: {
    width: "150px",
    padding: "1em",
    borderRadius: "10px",
    backgroundColor: "#fff",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    margin: "1em",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  photo: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    objectFit: "cover",
  },
  textContainer: {
    marginTop: "0.5em",
  },
  name: {
    fontSize: "1em",
    fontWeight: "bold",
    color: "#333",
    margin: "0",
  },
  position: {
    fontSize: "0.9em",
    color: "#6a0dad", // Same purple color as header
    margin: "0.5em 0 0 0",
  },
};

export default Body;
