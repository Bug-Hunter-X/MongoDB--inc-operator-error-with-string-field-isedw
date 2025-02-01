```javascript
// Correct usage of $inc operator after converting string to number
db.collection.updateOne({ _id: 1 }, { $inc: { "numericField": 1 } });

//Alternative solution to handle cases where field may not exist:
db.collection.updateOne({ _id: 1 }, { $inc: { "numericField": 1 }, $setOnInsert: { "numericField": 0 } });
```