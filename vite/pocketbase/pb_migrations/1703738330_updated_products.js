/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hi11idj5wkjbdqi")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "10w3lhnw",
    "name": "photo",
    "type": "file",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "mimeTypes": [
        "application/pdf",
        "application/vnd.ms-powerpoint",
        "image/vnd.adobe.photoshop",
        "image/png",
        "image/jpeg",
        "image/gif"
      ],
      "thumbs": [
        "100x100"
      ],
      "maxSelect": 1,
      "maxSize": 5242880,
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hi11idj5wkjbdqi")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "10w3lhnw",
    "name": "photo",
    "type": "file",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "mimeTypes": [
        "application/pdf",
        "application/vnd.ms-powerpoint",
        "image/vnd.adobe.photoshop",
        "image/png",
        "image/jpeg",
        "image/gif"
      ],
      "thumbs": [
        "100x100"
      ],
      "maxSelect": 1,
      "maxSize": 5242880,
      "protected": true
    }
  }))

  return dao.saveCollection(collection)
})
