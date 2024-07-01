export default function getListStudentIds(objectsArray) {
  if (!Array.isArray(objectsArray)) {
    return [];
  }

  const ids = objectsArray.map((obj) => obj.id);

  return ids;
}
