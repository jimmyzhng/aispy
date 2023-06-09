export const drawRect = (detections, ctx) => {
  detections.forEach(prediction => {
    // Get prediction results
    const [x, y, width, height] = prediction['bbox'];
    const text = prediction['class'];

    // Set Styling
    const color = 'red';
    ctx.strokeStyle = color;
    ctx.lineWidth = 5;
    ctx.font = '30px Arial';
    ctx.fillStyle = color;

    // Draw Rectangles and text
    ctx.beginPath();
    ctx.fillText(text, x, y);
    ctx.rect(x, y, width, height);
    ctx.stroke();

  });
};