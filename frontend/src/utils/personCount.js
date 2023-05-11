export default function personCount(detections) {
  // I have an array of objects, 
  // where I am looking for all values where detections[i].class === person
  // let personDetections = detections.filter((det) => det.class === 'person');

  return detections.filter(det => det.class === 'person').length;

}