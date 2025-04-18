function json1(json) {
  let ids = {};
  let res = [];
  for (let obj of json) {
    if (obj.batch_id in ids) {
      for (let batch of res) {
        if (batch[obj.batch_id]) {
          batch[obj.batch_id].push({
            name: [obj.name],
            contact: [obj.contact],
          });
          break;
        }
      }
    } else {
      let newBatch = {};
      newBatch[obj.batch_id] = [];
      newBatch[obj.batch_id].push({ name: [obj.name], contact: [obj.contact] });
      res.push(newBatch);
      ids[obj.batch_id] = 1;
    }
  }
}
