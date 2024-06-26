export default function guardrail(mathFunction) {
  const message = 'Guardrail was processed';
  const queue = [];

  try {
    const value = mathFunction();
    queue.push(value, message);
  } catch (error) {
    queue.push(error, message);
  }

  return queue;
}
