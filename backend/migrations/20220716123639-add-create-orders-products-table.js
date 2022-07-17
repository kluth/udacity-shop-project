'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db) {
  return db.createTable('orders-products', {
    ordersId: {
      type: 'int',
      primaryKey: true,
      notNull: true,
      references: {
        model: 'orders',
        key: 'id'
      }
    },
    productsId: {
      type: 'int',
      primaryKey: true,
      notNull: true,
      references: {
        model: 'products',
        key: 'id'
      }
    },
    quantity: {
      type: 'int',
      notNull: true
    }
  });
};

exports.down = function(db) {
  return db.dropTable('orders-products');
};

exports._meta = {
  "version": 1
};
