//async await

movePlayer(100, "left")
  .then(() => movePlayer(400, "left"))
  .then(() => movePlayer(10, "right"))
  .then(() => movePlayer(330, "left"));

async function playerStart() {
  const firstMove = await movePlaer(100, "left");
  await movePlaer(400, "left");
  await movePlaer(10, "right");
  await movePlaer(330, "left");
}
