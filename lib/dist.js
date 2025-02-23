module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var EventData = __webpack_require__(1);
var results = __webpack_require__(2);

const expectedVersion = {
  any: -2,
  noStream: -1,
  emptyStream: -1,
  streamExists: -4
};
Object.freeze(expectedVersion);

const positions = {
  start: new results.Position(0, 0),
  end: new results.Position(-1, -1)
};
Object.freeze(positions);

const streamPosition = {
  start: 0,
  end: -1
};
Object.freeze(streamPosition);

/**
 * Create an EventData object from JavaScript event/metadata that will be serialized as json
 * @public
 * @param {string} eventId    Event UUID
 * @param {object} event      Event object
 * @param {object} [metadata] Event metadata
 * @param {string} [type]     Event type
 * @returns {EventData}
 */
function createJsonEventData(eventId, event, metadata, type) {
  if (!event || typeof event !== 'object') throw new TypeError("data must be an object.");

  var eventBuf = Buffer.from(JSON.stringify(event));
  var metaBuf = metadata ? Buffer.from(JSON.stringify(metadata)) : null;
  return new EventData(eventId, type || event.constructor.name, true, eventBuf, metaBuf);
}

/**
 * Create an EventData object from event/metadata buffer(s)
 * @public
 * @param {string} eventId    Event UUID
 * @param {string} type       Event type
 * @param {boolean} isJson    is buffer(s) content json
 * @param {Buffer} data       Data buffer
 * @param {Buffer} [metadata] Metadata buffer
 * @returns {EventData}
 */
function createEventData(eventId, type, isJson, data, metadata) {
  return new EventData(eventId, type, isJson, data, metadata);
}

// Expose classes
exports.Position = results.Position;
exports.UserCredentials = __webpack_require__(6);
exports.PersistentSubscriptionSettings = __webpack_require__(7);
exports.SystemConsumerStrategies = __webpack_require__(8);
exports.GossipSeed = __webpack_require__(9);
exports.EventStoreConnection = __webpack_require__(10);
exports.ProjectionsManager = __webpack_require__(78);
// Expose errors
exports.WrongExpectedVersionError = __webpack_require__(41);
exports.StreamDeletedError = __webpack_require__(42);
exports.AccessDeniedError = __webpack_require__(43);
exports.ProjectionCommandFailedError = __webpack_require__(81);
// Expose enums/constants
exports.expectedVersion = expectedVersion;
exports.positions = positions;
exports.streamPosition = streamPosition;
exports.systemMetadata = __webpack_require__(82);
exports.eventReadStatus = results.EventReadStatus;
exports.sliceReadStatus = __webpack_require__(54);
exports.persistentSubscriptionNakEventAction =
exports.PersistentSubscriptionNakEventAction = __webpack_require__(66);
// Expose loggers
exports.NoopLogger = __webpack_require__(75);
exports.FileLogger = __webpack_require__(83);
// Expose Helper functions
exports.createConnection = __webpack_require__(10).create;
exports.createJsonEventData = createJsonEventData;
exports.createEventData = createEventData;


/***/ }),
/* 1 */
/***/ (function(module, exports) {

const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
function isValidId(id) {
  if (typeof id !== 'string') return false;
  return uuidRegex.test(id);
}

/**
 * Create an EventData
 * @private
 * @param {string} eventId
 * @param {string} type
 * @param {boolean} [isJson]
 * @param {Buffer} [data]
 * @param {Buffer} [metadata]
 * @constructor
 */
function EventData(eventId, type, isJson, data, metadata) {
  if (!isValidId(eventId)) throw new TypeError("eventId must be a string containing a UUID.");
  if (typeof type !== 'string' || type === '') throw new  TypeError("type must be a non-empty string.");
  if (isJson && typeof isJson !== 'boolean') throw new TypeError("isJson must be a boolean.");
  if (data && !Buffer.isBuffer(data)) throw new TypeError("data must be a Buffer.");
  if (metadata && !Buffer.isBuffer(metadata)) throw new TypeError("metadata must be a Buffer.");

  this.eventId = eventId;
  this.type = type;
  this.isJson = isJson || false;
  this.data = data || Buffer.alloc(0);
  this.metadata = metadata || Buffer.alloc(0);
  Object.freeze(this);
}

module.exports = EventData;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var guidParse = __webpack_require__(3);
var Long = __webpack_require__(4);
var ensure = __webpack_require__(5);

/**
 * @public
 * @param {!number|!Long} commitPosition
 * @param {!number|!Long} preparePosition
 * @constructor
 * @property {!Long} commitPosition
 * @property {!Long} preparePosition
 */
function Position(commitPosition, preparePosition) {
  ensure.notNull(commitPosition, "commitPosition");
  ensure.notNull(preparePosition, "preparePosition");
  this.commitPosition = Long.fromValue(commitPosition);
  this.preparePosition = Long.fromValue(preparePosition);
  Object.freeze(this);
}

Position.prototype.compareTo = function(other) {
  if (this.commitPosition.lt(other.commitPosition) || (this.commitPosition.eq(other.commitPosition)&& this.preparePosition.lt(other.preparePosition))) {
    return -1;
  }
  if (this.commitPosition.gt(other.commitPosition) || (this.commitPosition.eq(other.commitPosition) && this.preparePosition.gt(other.preparePosition))) {
    return 1;
  }
  return 0;
};

Position.prototype.toString = function() {
  return [this.commitPosition.toString(), this.preparePosition.toString()].join("/");
};

Position.start = new Position(0,0);
Position.end = new Position(-1,-1);

const EventReadStatus = Object.freeze({
  Success: 'success',
  NotFound: 'notFound',
  NoStream: 'noStream',
  StreamDeleted: 'streamDeleted'
});

/**
 * @param {object} ev
 * @constructor
 * @property {string} eventStreamId
 * @property {string} eventId
 * @property {Long} eventNumber
 * @property {string} eventType
 * @property {Date} created
 * @property {number} createdEpoch
 * @property {?Buffer} data
 * @property {?Buffer} metadata
 * @property {boolean} isJson
 */
function RecordedEvent(ev) {
  this.eventStreamId = ev.eventStreamId;
  this.eventId = guidParse.unparse(ev.eventId);
  this.eventNumber = ev.eventNumber;
  this.eventType = ev.eventType;
  this.created = new Date(ev.createdEpoch ? ev.createdEpoch.toNumber() : 0);
  this.createdEpoch = ev.createdEpoch ? ev.createdEpoch.toNumber() : 0;
  this.data = ev.data ? ev.data : Buffer.alloc(0);
  this.metadata = ev.metadata ? ev.metadata : Buffer.alloc(0);
  this.isJson = ev.dataContentType === 1;
  Object.freeze(this);
}

/**
 * @param {object} ev
 * @constructor
 * @property {?RecordedEvent} event
 * @property {?RecordedEvent} link
 * @property {?RecordedEvent} originalEvent
 * @property {boolean} isResolved
 * @property {?Position} originalPosition
 * @property {string} originalStreamId
 * @property {Long} originalEventNumber
 */
function ResolvedEvent(ev) {
  this.event = ev.event === null ? null : new RecordedEvent(ev.event);
  this.link = ev.link === null ? null : new RecordedEvent(ev.link);
  this.originalEvent = this.link || this.event;
  this.isResolved = this.link !== null && this.event !== null;
  this.originalPosition = (ev.commitPosition && ev.preparePosition) ? new Position(ev.commitPosition, ev.preparePosition) : null;
  this.originalStreamId = this.originalEvent && this.originalEvent.eventStreamId;
  this.originalEventNumber = this.originalEvent && this.originalEvent.eventNumber;
  Object.freeze(this);
}

/**
 *
 * @param {string} status
 * @param {string} stream
 * @param {Long} eventNumber
 * @param {object} event
 * @constructor
 * @property {string} status
 * @property {string} stream
 * @property {Long} eventNumber
 * @property {ResolvedEvent} event
 */
function EventReadResult(status, stream, eventNumber, event) {
  this.status = status;
  this.stream = stream;
  this.eventNumber = eventNumber;
  this.event = status === EventReadStatus.Success ? new ResolvedEvent(event) : null;
  Object.freeze(this);
}

/**
 * @param {number} nextExpectedVersion
 * @param {Position} logPosition
 * @constructor
 * @property {Long} nextExpectedVersion
 * @property {Position} logPosition
 */
function WriteResult(nextExpectedVersion, logPosition) {
  this.nextExpectedVersion = nextExpectedVersion;
  this.logPosition = logPosition;
  Object.freeze(this);
}

/**
 * @param {string} status
 * @param {string} stream
 * @param {Long} fromEventNumber
 * @param {string} readDirection
 * @param {object[]} events
 * @param {Long} nextEventNumber
 * @param {Long} lastEventNumber
 * @param {boolean} isEndOfStream
 * @constructor
 * @property {string} status
 * @property {string} stream
 * @property {Long} fromEventNumber
 * @property {string} readDirection
 * @property {ResolvedEvent[]} events
 * @property {Long} nextEventNumber
 * @property {Long} lastEventNumber
 * @property {boolean} isEndOfStream
 */
function StreamEventsSlice(
    status, stream, fromEventNumber, readDirection, events, nextEventNumber, lastEventNumber, isEndOfStream
) {
  this.status = status;
  this.stream = stream;
  this.fromEventNumber = fromEventNumber;
  this.readDirection = readDirection;
  this.events = events ? events.map(function(ev) { return new ResolvedEvent(ev); }) : [];
  this.nextEventNumber = nextEventNumber;
  this.lastEventNumber = lastEventNumber;
  this.isEndOfStream = isEndOfStream;
  Object.freeze(this);
}

/**
 * @param {string} readDirection
 * @param {Position} fromPosition
 * @param {Position} nextPosition
 * @param {ResolvedEvent[]} events
 * @constructor
 * @property {string} readDirection
 * @property {Position} fromPosition
 * @property {Position} nextPosition
 * @property {ResolvedEvent[]} events
 */
function AllEventsSlice(readDirection, fromPosition, nextPosition, events) {
  this.readDirection = readDirection;
  this.fromPosition = fromPosition;
  this.nextPosition = nextPosition;
  this.events = events ? events.map(function(ev){ return new ResolvedEvent(ev); }) : [];
  this.isEndOfStream = events === null || events.length === 0;
  Object.freeze(this);
}

/**
 * @param {Position} logPosition
 * @constructor
 * @property {Position} logPosition
 */
function DeleteResult(logPosition) {
  this.logPosition = logPosition;
  Object.freeze(this);
}

/**
 * @param {string} stream
 * @param {boolean} isStreamDeleted
 * @param {Long} metastreamVersion
 * @param {object} streamMetadata
 * @constructor
 * @property {string} stream
 * @property {boolean} isStreamDeleted
 * @property {Long} metastreamVersion
 * @property {object} streamMetadata
 */
function RawStreamMetadataResult(stream, isStreamDeleted, metastreamVersion, streamMetadata) {
  ensure.notNullOrEmpty(stream);
  this.stream = stream;
  this.isStreamDeleted = isStreamDeleted;
  this.metastreamVersion = metastreamVersion;
  this.streamMetadata = streamMetadata;
  Object.freeze(this);
}

const PersistentSubscriptionCreateStatus = Object.freeze({
  Success: 'success',
  NotFound: 'notFound',
  Failure: 'failure'
});

/**
 * @param {string} status
 * @constructor
 * @property {string} status
 */
function PersistentSubscriptionCreateResult(status) {
  this.status = status;
  Object.freeze(this);
}

const PersistentSubscriptionUpdateStatus = Object.freeze({
  Success: 'success',
  NotFound: 'notFound',
  Failure: 'failure',
  AccessDenied: 'accessDenied'
});

/**
 * @param {string} status
 * @constructor
 * @property {string} status
 */
function PersistentSubscriptionUpdateResult(status) {
  this.status = status;
  Object.freeze(this);
}

const PersistentSubscriptionDeleteStatus = Object.freeze({
  Success: 'success',
  Failure: 'failure'
});

/**
 * @param {string} status
 * @constructor
 * @property {string} status
 */
function PersistentSubscriptionDeleteResult(status) {
  this.status = status;
  Object.freeze(this);
}

// Exports Constructors
exports.Position = Position;
exports.ResolvedEvent = ResolvedEvent;
exports.EventReadStatus = EventReadStatus;
exports.EventReadResult = EventReadResult;
exports.WriteResult = WriteResult;
exports.StreamEventsSlice = StreamEventsSlice;
exports.AllEventsSlice = AllEventsSlice;
exports.DeleteResult = DeleteResult;
exports.RawStreamMetadataResult = RawStreamMetadataResult;
exports.PersistentSubscriptionCreateResult = PersistentSubscriptionCreateResult;
exports.PersistentSubscriptionCreateStatus = PersistentSubscriptionCreateStatus;
exports.PersistentSubscriptionUpdateResult = PersistentSubscriptionUpdateResult;
exports.PersistentSubscriptionUpdateStatus = PersistentSubscriptionUpdateStatus;
exports.PersistentSubscriptionDeleteResult = PersistentSubscriptionDeleteResult;
exports.PersistentSubscriptionDeleteStatus = PersistentSubscriptionDeleteStatus;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Maps for number <-> hex string conversion
var _byteToHex = [];
var _hexToByte = {};
for (var i = 0; i < 256; i++) {
  _byteToHex[i] = (i + 0x100).toString(16).substr(1);
  _hexToByte[_byteToHex[i]] = i;
}

// **`parse()` - Parse a UUID into it's component bytes**
function parse(s, buf, offset) {
  const i = (buf && offset) || 0;
  var ii = 0;

  if (buf) buf.fill(0, i, i + 16);
  buf = buf || Buffer.alloc(16);
  s.toLowerCase().replace(/[0-9a-f]{2}/g, function(oct) {
    if (ii < 16) { // Don't overflow!
      buf[i + ii++] = _hexToByte[oct];
    }
  });

  var buf2 = Buffer.from(buf.slice(i, i + 16));
  buf[i + 0] = buf2[3];
  buf[i + 1] = buf2[2];
  buf[i + 2] = buf2[1];
  buf[i + 3] = buf2[0];
  buf[i + 4] = buf2[5];
  buf[i + 5] = buf2[4];
  buf[i + 6] = buf2[7];
  buf[i + 7] = buf2[6];

  return buf;
}

// **`unparse()` - Convert UUID byte array (ala parse()) into a string**
function unparse(buf, offset) {
  var i = offset || 0;
  return '03020100-0504-0706-0809-101112131415'.replace(/\d{2}/g, function (num) {
    var j = parseInt(num, 10);
    return _byteToHex[buf[i+j]];
  })
}

exports.parse = parse;
exports.unparse = unparse;


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("long");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var Long = __webpack_require__(4);

module.exports.notNullOrEmpty = function(value, name) {
  if (value === null) throw new TypeError(name + " should not be null.");
  if (value === '') throw new Error(name + " should not be empty.");
};

module.exports.notNull = function(value, name) {
  if (value === null) throw new TypeError(name + " should not be null.");
};

function isInteger(value, name) {
  if (typeof value !== 'number' || value % 1 !== 0) throw new TypeError(name + " should be an integer.");
}
module.exports.isInteger = isInteger;

module.exports.isLongOrInteger = function(value, name) {
  if (typeof value === 'number') {
    return isInteger(value, name);
  } else if (!Long.isLong(value)) {
    throw new TypeError(name + " should be a Long|number.");
  }
};

module.exports.isArrayOf = function(expectedType, value, name) {
  if (!Array.isArray(value)) throw new TypeError(name + " should be an array.");
  if (!value.every(function(x) { return x instanceof expectedType; })) {
    throw new TypeError([name, " should be an array of ", expectedType.name, "."].join(""));
  }
};

module.exports.isTypeOf = function(expectedType, value, name, nullAllowed) {
  if (nullAllowed && value === null) return;
  if (!(value instanceof expectedType)) {
    throw new TypeError([name, " should be of type '", expectedType.name, "'", nullAllowed ? " or null" : "", "."].join(""));
  }
};

module.exports.positive = function(value, name) {
  if (value <= 0) throw new Error(name + " should be positive.");
};

module.exports.nonNegative = function(value, name) {
  if (value < 0) throw new Error(name + " should be non-negative.");
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var ensure = __webpack_require__(5);

/**
 * @param {string} username
 * @param {string} password
 * @constructor
 * @property {string} username
 * @property {string} password
 */
function UserCredentials(username, password) {
  ensure.notNullOrEmpty(username, 'username');
  ensure.notNullOrEmpty(password, 'password');
  this.username = username;
  this.password = password;
  Object.freeze(this);
}

module.exports = UserCredentials;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var SystemConsumerStrategies = __webpack_require__(8);
var ensure = __webpack_require__(5);
var Long = __webpack_require__(4);

function PersistentSubscriptionSettings(
  resolveLinkTos, startFrom, extraStatistics, messageTimeout,
  maxRetryCount, liveBufferSize, readBatchSize, historyBufferSize,
  checkPointAfter, minCheckPointCount, maxCheckPointCount,
  maxSubscriberCount, namedConsumerStrategy
) {
  ensure.isLongOrInteger(startFrom);
  startFrom = Long.fromValue(startFrom);

  this.resolveLinkTos = resolveLinkTos;
  this.startFrom = startFrom;
  this.extraStatistics = extraStatistics;
  this.messageTimeout = messageTimeout;
  this.maxRetryCount = maxRetryCount;
  this.liveBufferSize = liveBufferSize;
  this.readBatchSize = readBatchSize;
  this.historyBufferSize = historyBufferSize;
  this.checkPointAfter = checkPointAfter;
  this.minCheckPointCount = minCheckPointCount;
  this.maxCheckPointCount = maxCheckPointCount;
  this.maxSubscriberCount = maxSubscriberCount;
  this.namedConsumerStrategy = namedConsumerStrategy;
}

PersistentSubscriptionSettings.create = function() {
  return new PersistentSubscriptionSettings(false, -1, false, 30000, 500, 500, 10, 20, 2000, 10, 1000, 0, SystemConsumerStrategies.RoundRobin);
};

module.exports = PersistentSubscriptionSettings;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

const SystemConsumerStrategies = Object.freeze({
  DispatchToSingle: 'DispatchToSingle',
  RoundRobin: 'RoundRobin',
  Pinned: 'Pinned'
});

module.exports = SystemConsumerStrategies;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

function GossipSeed(endPoint, hostName, hostHeader) {
  if (typeof endPoint !== 'object' || !endPoint.host || !endPoint.port) throw new TypeError('endPoint must be have host and port properties.');
  this.endPoint = endPoint;
  this.hostName = hostName;
  this.hostHeader = hostHeader;
  Object.freeze(this);
}

module.exports = GossipSeed;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var EventStoreNodeConnection = __webpack_require__(11);
var StaticEndpointDiscoverer = __webpack_require__(69);
var ClusterDiscoverer = __webpack_require__(70);
var NoopLogger = __webpack_require__(75);
var ensure = __webpack_require__(5);

const util = __webpack_require__(12);
const http = __webpack_require__(76);
const dns = __webpack_require__(77);

const dnsService = {
  lookup : util.promisify(dns.lookup),
  ADDRCONFIG: dns.ADDRCONFIG,
  V4MAPPED: dns.V4MAPPED
};

var defaultConnectionSettings = Object.freeze({
  log: new NoopLogger(),
  verboseLogging: false,

  maxQueueSize: 5000,
  maxConcurrentItems: 5000,
  maxRetries: 10,
  maxReconnections: 10,

  requireMaster: true,

  reconnectionDelay: 100,
  operationTimeout: 7*1000,
  operationTimeoutCheckPeriod: 1000,

  defaultUserCredentials: null,
  useSslConnection: false,
  targetHost: null,
  validateServer: false,

  failOnNoServerResponse: false,
  heartbeatInterval: 750,
  heartbeatTimeout: 1500,
  clientConnectionTimeout: 1000,

  // Cluster Settings
  clusterDns: '',
  maxDiscoverAttempts: 10,
  discoverDelay: 500,
  externalGossipPort: 0,
  gossipTimeout: 1000
});


function merge(a,b) {
  var c = {};
  Object.getOwnPropertyNames(a).forEach(function(k) {
    c[k] = a[k];
  });
  Object.getOwnPropertyNames(b).forEach(function(k) {
    c[k] = b[k];
  });
  return c;
}

function createFromTcpEndpoint(settings, tcpEndpoint, connectionName) {
  if (!tcpEndpoint.port || !tcpEndpoint.host) throw new TypeError('endPoint object must have host and port properties.');
  var mergedSettings = merge(defaultConnectionSettings, settings || {});
  var endpointDiscoverer = new StaticEndpointDiscoverer(tcpEndpoint, settings.useSslConnection);
  return new EventStoreNodeConnection(mergedSettings, null, endpointDiscoverer, connectionName || null);
}

function createFromStringEndpoint(settings, endPoint, connectionName) {
  var m = endPoint.match(/^(tcp|discover):\/\/([^:]+):?(\d+)?$/);
  if (!m) throw new Error('endPoint string must be tcp://hostname[:port] or discover://dns[:port]');
  var scheme = m[1];
  var host = m[2] || null;
  var port = m[3] ? parseInt(m[3]) : null;
  if (scheme === 'tcp') {
    var tcpEndpoint = {
      host: host,
      port: port || 1113
    };
    return createFromTcpEndpoint(settings, tcpEndpoint, connectionName);
  }
  if (scheme === 'discover') {
    return createFromClusterDns(settings, host, port || 2113, connectionName);
  }
  throw new Error('Invalid scheme for endPoint: ' + scheme);
}

function createFromClusterDns(connectionSettings, clusterDns, externalGossipPort, connectionName) {
  ensure.notNull(connectionSettings, "connectionSettings");
  ensure.notNull(clusterDns, "clusterDns");
  var mergedSettings = merge(defaultConnectionSettings, connectionSettings || {});
  var clusterSettings = {
    clusterDns: clusterDns,
    seeds: null,
    managerExternalHttpPort: externalGossipPort,
    maxDiscoverAttempts: mergedSettings.maxDiscoverAttempts,
    discoverDelay: mergedSettings.discoverDelay,
    gossipTimeout: mergedSettings.gossipTimeout
  };
  var endPointDiscoverer = new ClusterDiscoverer(
    mergedSettings.log,
    clusterSettings,
    dnsService,
    http
  );
  return new EventStoreNodeConnection(mergedSettings, clusterSettings, endPointDiscoverer, connectionName);
}

function createFromGossipSeeds(connectionSettings, gossipSeeds, connectionName) {
  ensure.notNull(connectionSettings, "connectionSettings");
  ensure.notNull(gossipSeeds, "gossipSeeds");
  var mergedSettings = merge(defaultConnectionSettings, connectionSettings || {});
  var clusterSettings = {
    clusterDns: '',
    seeds: gossipSeeds,
    externalGossipPort: 0,
    maxDiscoverAttempts: mergedSettings.maxDiscoverAttempts,
    discoverDelay: mergedSettings.discoverDelay,
    gossipTimeout: mergedSettings.gossipTimeout
  };
  var endPointDiscoverer = new ClusterDiscoverer(
    mergedSettings.log,
    clusterSettings,
    dnsService,
    http
  );
  return new EventStoreNodeConnection(mergedSettings, clusterSettings, endPointDiscoverer, connectionName);
}

/**
 * Create an EventStore connection
 * @public
 * @alias createConnection
 * @param {object} settings
 * @param {boolean} [settings.verboseLogging=false]
 * @param {number} [settings.maxQueueSize=5000]
 * @param {number} [settings.maxConcurrentItems=5000]
 * @param {number} [settings.maxRetries=10]
 * @param {number} [settings.maxReconnections=10]
 * @param {boolean} [settings.requireMaster=true]
 * @param {number} [settings.reconnectionDelay=100]
 * @param {number} [settings.operationTimeout=7000]
 * @param {number} [settings.operationTimeoutCheckPeriod=1000]
 * @param {object} [settings.defaultUserCredentials=null] - The default user credentials to use for requests
 * @param {boolean} [settings.useSslConnection=false] - Whether to use SSL or not
 * @param {object} [settings.targetHost=null]
 * @param {boolean} [settings.validateServer=false]
 * @param {boolean} [settings.failOnNoServerResponse=false]
 * @param {number} [settings.heartbeatInterval=750]
 * @param {number} [settings.heartbeatTimeout=1500]
 * @param {number} [settings.clientConnectionTimeout=1000]
 * @param {string} [settings.clusterDns='']
 * @param {number} [settings.maxDiscoverAttempts=10]
 * @param {number} [settings.externalGossipPort=0]
 * @param {number} [settings.gossipTimeout=1000]
 * @param {string|object|array} endPointOrGossipSeeds
 * @param {string} [connectionName]
 * @returns {EventStoreNodeConnection}
 */
module.exports.create = function(settings, endPointOrGossipSeeds, connectionName) {
  if (Array.isArray(endPointOrGossipSeeds)) return createFromGossipSeeds(settings, endPointOrGossipSeeds, connectionName);
  if (typeof endPointOrGossipSeeds === 'object') return createFromTcpEndpoint(settings, endPointOrGossipSeeds, connectionName);
  if (typeof endPointOrGossipSeeds === 'string') return createFromStringEndpoint(settings, endPointOrGossipSeeds, connectionName);
  throw new TypeError('endPointOrGossipSeeds must be an object, a string or an array.');
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var util = __webpack_require__(12);
var uuid = __webpack_require__(13);
var Long = __webpack_require__(4);
var EventEmitter = __webpack_require__(14).EventEmitter;
var ensure = __webpack_require__(5);

var messages = __webpack_require__(15);
var EventStoreConnectionLogicHandler = __webpack_require__(16);

var DeleteStreamOperation = __webpack_require__(40);
var AppendToStreamOperation = __webpack_require__(45);
var StartTransactionOperation = __webpack_require__(46);
var TransactionalWriteOperation = __webpack_require__(48);
var CommitTransactionOperation = __webpack_require__(49);
var ReadEventOperation = __webpack_require__(50);
var ReadStreamEventsForwardOperation = __webpack_require__(51);
var ReadStreamEventsBackwardOperation = __webpack_require__(55);
var ReadAllEventsForwardOperation = __webpack_require__(56);
var ReadAllEventsBackwardOperation = __webpack_require__(57);
var CreatePersistentSubscriptionOperation = __webpack_require__(58);
var UpdatePersistentSubscriptionOperation = __webpack_require__(59);
var DeletePersistentSubscriptionOperation = __webpack_require__(60);

var EventStoreTransaction = __webpack_require__(47);
var EventStoreStreamCatchUpSubscription = __webpack_require__(61);
var EventStoreAllCatchUpSubscription = __webpack_require__(63);
var EventStorePersistentSubscription = __webpack_require__(64);

var results = __webpack_require__(2);
var systemStreams = __webpack_require__(67);
var systemEventTypes = __webpack_require__(68);
var EventData = __webpack_require__(1);

const MaxReadSize = 4096;

/**
 * @protected
 * @constructor
 */
function EventStoreNodeConnection(settings, clusterSettings, endpointDiscoverer, connectionName) {
  EventEmitter.call(this);
  this._connectionName = connectionName || ['ES-', uuid.v4()].join('');
  this._settings = settings;
  this._clusterSettings = clusterSettings;
  this._endpointDiscoverer = endpointDiscoverer;
  this._handler = new EventStoreConnectionLogicHandler(this, settings);

  var self = this;
  this._handler.on('connected', function(e) {
    self.emit('connected', e);
  });
  this._handler.on('disconnected', function(e) {
    self.emit('disconnected', e);
  });
  this._handler.on('reconnecting', function(e) {
    self.emit('reconnecting', e);
  });
  this._handler.on('closed', function(e) {
    self.emit('closed', e);
  });
  this._handler.on('error', function(e) {
    self.emit('error', e);
  });
  this._handler.on('heartbeatInfo', function(e) {
    self.emit('heartbeatInfo', e);
  });
}
util.inherits(EventStoreNodeConnection, EventEmitter);

Object.defineProperty(EventStoreNodeConnection.prototype, 'connectionName', {
  get: function() {
    return this._connectionName;
  }
});

/**
 * Start connection task
 * @public
 * @returns {Promise}
 */
EventStoreNodeConnection.prototype.connect = function() {
  var self = this;
  return new Promise(function(resolve, reject) {
    function cb(err) {
      if (err) return reject(err);
      resolve();
    }
    var startConnectionMessage = new messages.StartConnectionMessage(cb, self._endpointDiscoverer);
    self._handler.enqueueMessage(startConnectionMessage);
  });
};

/**
 * Close connection
 * @public
 */
EventStoreNodeConnection.prototype.close = function() {
  this._handler.enqueueMessage(new messages.CloseConnectionMessage("Connection close requested by client.", null));
};

/**
 * Delete a stream (async)
 * @public
 * @param {string} stream
 * @param {Long|number} expectedVersion
 * @param {boolean} [hardDelete]
 * @param {UserCredentials} [userCredentials]
 * @returns {Promise.<DeleteResult>}
 */
EventStoreNodeConnection.prototype.deleteStream = function(stream, expectedVersion, hardDelete, userCredentials) {
  ensure.notNullOrEmpty(stream, "stream");
  ensure.isLongOrInteger(expectedVersion, "expectedVersion");
  expectedVersion = Long.fromValue(expectedVersion);
  hardDelete = Boolean(hardDelete);
  userCredentials = userCredentials || null;

  var self = this;
  return new Promise(function(resolve, reject) {
    function cb(err, result) {
      if (err) return reject(err);
      resolve(result);
    }

    var deleteStreamOperation = new DeleteStreamOperation(
        self._settings.log, cb, self._settings.requireMaster, stream, expectedVersion, hardDelete, userCredentials);
    self._enqueueOperation(deleteStreamOperation);
  });
};

/**
 * Append events to a stream (async)
 * @public
 * @param {string} stream The name of the stream to which to append.
 * @param {Long|number} expectedVersion The version at which we currently expect the stream to be in order that an optimistic concurrency check can be performed.
 * @param {EventData[]|EventData} events The event(s) to append.
 * @param {UserCredentials} [userCredentials] User credentials
 * @returns {Promise.<WriteResult>}
 */
EventStoreNodeConnection.prototype.appendToStream = function(stream, expectedVersion, events, userCredentials) {
  ensure.notNullOrEmpty(stream, "stream");
  ensure.isLongOrInteger(expectedVersion, "expectedVersion");
  expectedVersion = Long.fromValue(expectedVersion);
  if (!Array.isArray(events)) events = [events];
  ensure.isArrayOf(EventData, events, "events");
  userCredentials = userCredentials || null;

  var self = this;
  return new Promise(function(resolve, reject) {
    function cb(err, result) {
      if (err) return reject(err);
      resolve(result);
    }
    var operation = new AppendToStreamOperation(self._settings.log, cb, self._settings.requireMaster, stream,
        expectedVersion, events, userCredentials);
    self._enqueueOperation(operation);
  });
};

/**
 * Start a transaction (async)
 * @public
 * @param {string} stream
 * @param {Long|number} expectedVersion
 * @param {UserCredentials} [userCredentials]
 * @returns {Promise.<EventStoreTransaction>}
 */
EventStoreNodeConnection.prototype.startTransaction = function(stream, expectedVersion, userCredentials) {
  ensure.notNullOrEmpty(stream, "stream");
  ensure.isLongOrInteger(expectedVersion, "expectedVersion");
  expectedVersion = Long.fromValue(expectedVersion);
  userCredentials = userCredentials || null;

  var self = this;
  return new Promise(function(resolve, reject) {
    function cb(err, result) {
      if (err) return reject(err);
      resolve(result);
    }
    var operation = new StartTransactionOperation(self._settings.log, cb, self._settings.requireMaster, stream,
        expectedVersion, self, userCredentials);
    self._enqueueOperation(operation);
  });
};

/**
 * Continue a transaction
 * @public
 * @param {number} transactionId
 * @param {UserCredentials} userCredentials
 * @returns {EventStoreTransaction}
 */
EventStoreNodeConnection.prototype.continueTransaction = function(transactionId, userCredentials) {
  ensure.nonNegative(transactionId, "transactionId");

  return new EventStoreTransaction(transactionId, userCredentials, this);
};

EventStoreNodeConnection.prototype.transactionalWrite = function(transaction, events, userCredentials) {
  ensure.isTypeOf(EventStoreTransaction, transaction, "transaction");
  ensure.isArrayOf(EventData, events, "events");
  userCredentials = userCredentials || null;

  var self = this;
  return new Promise(function(resolve, reject) {
    function cb(err) {
      if (err) return reject(err);
      resolve();
    }
    var operation = new TransactionalWriteOperation(self._settings.log, cb, self._settings.requireMaster,
        transaction.transactionId, events, userCredentials);
    self._enqueueOperation(operation);
  });
};

/**
 * Commit a transaction
 * @public
 * @param transaction
 * @param userCredentials
 * @returns {Promise.<WriteResult>}
 */
EventStoreNodeConnection.prototype.commitTransaction = function(transaction, userCredentials) {
  ensure.isTypeOf(EventStoreTransaction, transaction, "transaction");

  var self = this;
  return new Promise(function(resolve, reject) {
    function cb(err, result) {
      if (err) return reject(err);
      resolve(result);
    }
    var operation = new CommitTransactionOperation(self._settings.log, cb, self._settings.requireMaster,
        transaction.transactionId, userCredentials);
    self._enqueueOperation(operation);
  });
};

/**
 * Read a single event (async)
 * @public
 * @param {string} stream
 * @param {Long|number} eventNumber
 * @param {boolean} [resolveLinkTos]
 * @param {UserCredentials} [userCredentials]
 * @returns {Promise.<EventReadResult>}
 */
EventStoreNodeConnection.prototype.readEvent = function(stream, eventNumber, resolveLinkTos, userCredentials) {
  ensure.notNullOrEmpty(stream, "stream");
  ensure.isLongOrInteger(eventNumber, "eventNumber");
  eventNumber = Long.fromValue(eventNumber);
  resolveLinkTos = Boolean(resolveLinkTos);
  userCredentials = userCredentials || null;

  if (typeof stream !== 'string' || stream === '') throw new TypeError("stream must be an non-empty string.");
  if (eventNumber.compare(-1) < 0) throw new Error("eventNumber out of range.");
  if (resolveLinkTos && typeof resolveLinkTos !== 'boolean') throw new TypeError("resolveLinkTos must be a boolean.");

  var self = this;
  return new Promise(function(resolve, reject){
    function cb(err, result) {
      if (err) return reject(err);
      resolve(result);
    }
    var operation = new ReadEventOperation(self._settings.log, cb, stream, eventNumber, resolveLinkTos,
        self._settings.requireMaster, userCredentials);
    self._enqueueOperation(operation);
  });
};

/**
 * Reading a specific stream forwards (async)
 * @public
 * @param {string} stream
 * @param {Long|number} start
 * @param {number} count
 * @param {boolean} [resolveLinkTos]
 * @param {UserCredentials} [userCredentials]
 * @returns {Promise.<StreamEventsSlice>}
 */
EventStoreNodeConnection.prototype.readStreamEventsForward = function(
    stream, start, count, resolveLinkTos, userCredentials
) {
  ensure.notNullOrEmpty(stream, "stream");
  ensure.isLongOrInteger(start, "start");
  start = Long.fromValue(start);
  ensure.nonNegative(start, "start");
  ensure.isInteger(count, "count");
  ensure.positive(count, "count");
  if (count > MaxReadSize) throw new Error(util.format("Count should be less than %d. For larger reads you should page.", MaxReadSize));
  resolveLinkTos = Boolean(resolveLinkTos);
  userCredentials = userCredentials || null;

  var self = this;
  return new Promise(function(resolve, reject) {
    function cb(err, result) {
      if (err) return reject(err);
      resolve(result);
    }
    var operation = new ReadStreamEventsForwardOperation(self._settings.log, cb, stream, start, count,
        resolveLinkTos, self._settings.requireMaster, userCredentials);
    self._enqueueOperation(operation);
  });
};

/**
 * Reading a specific stream backwards (async)
 * @public
 * @param {string} stream
 * @param {Long|number} start
 * @param {number} count
 * @param {boolean} [resolveLinkTos]
 * @param {UserCredentials} [userCredentials]
 * @returns {Promise.<StreamEventsSlice>}
 */
EventStoreNodeConnection.prototype.readStreamEventsBackward = function(
    stream, start, count, resolveLinkTos, userCredentials
) {
  ensure.notNullOrEmpty(stream, "stream");
  ensure.isLongOrInteger(start, "start");
  start = Long.fromValue(start);
  ensure.isInteger(count, "count");
  ensure.positive(count, "count");
  if (count > MaxReadSize) throw new Error(util.format("Count should be less than %d. For larger reads you should page.", MaxReadSize));
  resolveLinkTos = Boolean(resolveLinkTos);
  userCredentials = userCredentials || null;

  var self = this;
  return new Promise(function(resolve, reject) {
    function cb(err, result) {
      if (err) return reject(err);
      resolve(result);
    }
    var operation = new ReadStreamEventsBackwardOperation(self._settings.log, cb, stream, start, count,
        resolveLinkTos, self._settings.requireMaster, userCredentials);
    self._enqueueOperation(operation);
  });
};

/**
 * Reading all events forwards (async)
 * @public
 * @param {Position} position
 * @param {number} maxCount
 * @param {boolean} [resolveLinkTos]
 * @param {UserCredentials} [userCredentials]
 * @returns {Promise.<AllEventsSlice>}
 */
EventStoreNodeConnection.prototype.readAllEventsForward = function(
    position, maxCount, resolveLinkTos, userCredentials
) {
  ensure.isTypeOf(results.Position, position, "position");
  ensure.isInteger(maxCount, "maxCount");
  ensure.positive(maxCount, "maxCount");
  if (maxCount > MaxReadSize) throw new Error(util.format("Count should be less than %d. For larger reads you should page.", MaxReadSize));
  resolveLinkTos = Boolean(resolveLinkTos);
  userCredentials = userCredentials || null;

  var self = this;
  return new Promise(function(resolve, reject) {
    function cb(err, result) {
      if (err) return reject(err);
      resolve(result);
    }
    var operation = new ReadAllEventsForwardOperation(self._settings.log, cb, position, maxCount,
        resolveLinkTos, self._settings.requireMaster, userCredentials);
    self._enqueueOperation(operation);
  });
};

/**
 * Reading all events backwards (async)
 * @public
 * @param {Position} position
 * @param {number} maxCount
 * @param {boolean} [resolveLinkTos]
 * @param {UserCredentials} [userCredentials]
 * @returns {Promise.<AllEventsSlice>}
 */
EventStoreNodeConnection.prototype.readAllEventsBackward = function(
    position, maxCount, resolveLinkTos, userCredentials
) {
  ensure.isTypeOf(results.Position, position, "position");
  ensure.isInteger(maxCount, "maxCount");
  ensure.positive(maxCount, "maxCount");
  if (maxCount > MaxReadSize) throw new Error(util.format("Count should be less than %d. For larger reads you should page.", MaxReadSize));
  resolveLinkTos = Boolean(resolveLinkTos);
  userCredentials = userCredentials || null;

  var self = this;
  return new Promise(function(resolve, reject) {
    function cb(err, result) {
      if (err) return reject(err);
      resolve(result);
    }
    var operation = new ReadAllEventsBackwardOperation(self._settings.log, cb, position, maxCount,
        resolveLinkTos || false, self._settings.requireMaster, userCredentials || null);
    self._enqueueOperation(operation);
  });
};

/**
 * Subscribe to a stream (async)
 * @public
 * @param {!string} stream
 * @param {!boolean} resolveLinkTos
 * @param {function} eventAppeared
 * @param {function} [subscriptionDropped]
 * @param {UserCredentials} [userCredentials]
 * @returns {Promise.<EventStoreSubscription>}
 */
EventStoreNodeConnection.prototype.subscribeToStream = function(
    stream, resolveLinkTos, eventAppeared, subscriptionDropped, userCredentials
) {
  ensure.notNullOrEmpty(stream, "stream");
  ensure.isTypeOf(Function, eventAppeared, "eventAppeared");
  if (subscriptionDropped) ensure.isTypeOf(Function, subscriptionDropped, "subscriptionDropped");

  var self = this;
  return new Promise(function(resolve,reject) {
    function cb(err, result) {
      if (err) return reject(err);
      resolve(result);
    }
    self._handler.enqueueMessage(
        new messages.StartSubscriptionMessage(
            cb, stream, !!resolveLinkTos, userCredentials || null, eventAppeared, subscriptionDropped || null,
            self._settings.maxRetries, self._settings.operationTimeout));
  });
};

/**
 * Subscribe to a stream from position
 * @public
 * @param {!string} stream
 * @param {?number|Position} lastCheckpoint
 * @param {!boolean} resolveLinkTos
 * @param {!function} eventAppeared
 * @param {function} [liveProcessingStarted]
 * @param {function} [subscriptionDropped]
 * @param {UserCredentials} [userCredentials]
 * @param {!number} [readBatchSize]
 * @returns {EventStoreStreamCatchUpSubscription}
 */
EventStoreNodeConnection.prototype.subscribeToStreamFrom = function(
    stream, lastCheckpoint, resolveLinkTos, eventAppeared, liveProcessingStarted, subscriptionDropped,
    userCredentials, readBatchSize
) {
  if (typeof stream !== 'string' || stream === '') throw new TypeError("stream must be a non-empty string.");
  if (lastCheckpoint !== null) {
    ensure.isLongOrInteger(lastCheckpoint);
    lastCheckpoint = Long.fromValue(lastCheckpoint);
  }
  if (typeof eventAppeared !== 'function') throw new TypeError("eventAppeared must be a function.");

  var catchUpSubscription =
      new EventStoreStreamCatchUpSubscription(this, this._settings.log, stream, lastCheckpoint,
          resolveLinkTos, userCredentials || null, eventAppeared,
          liveProcessingStarted || null, subscriptionDropped || null, this._settings.verboseLogging,
          readBatchSize);
  catchUpSubscription.start();
  return catchUpSubscription;
};

/**
 * Subscribe to all (async)
 * @public
 * @param {!boolean} resolveLinkTos
 * @param {!function} eventAppeared
 * @param {function} [subscriptionDropped]
 * @param {UserCredentials} [userCredentials]
 * @returns {Promise.<EventStoreSubscription>}
 */
EventStoreNodeConnection.prototype.subscribeToAll = function(
    resolveLinkTos, eventAppeared, subscriptionDropped, userCredentials
) {
  if (typeof eventAppeared !== 'function') throw new TypeError("eventAppeared must be a function.");

  var self = this;
  return new Promise(function(resolve, reject) {
    function cb(err, result) {
      if (err) return reject(err);
      resolve(result);
    }
    self._handler.enqueueMessage(
        new messages.StartSubscriptionMessage(
            cb, '', resolveLinkTos, userCredentials || null, eventAppeared, subscriptionDropped || null,
            self._settings.maxRetries, self._settings.operationTimeout));
  });
};

/**
 * Subscribe to all from
 * @public
 * @param {?Position} lastCheckpoint
 * @param {!boolean} resolveLinkTos
 * @param {!function} eventAppeared
 * @param {function} [liveProcessingStarted]
 * @param {function} [subscriptionDropped]
 * @param {UserCredentials} [userCredentials]
 * @param {!number} [readBatchSize]
 * @returns {EventStoreAllCatchUpSubscription}
 */
EventStoreNodeConnection.prototype.subscribeToAllFrom = function(
    lastCheckpoint, resolveLinkTos, eventAppeared, liveProcessingStarted, subscriptionDropped,
    userCredentials, readBatchSize
) {
  ensure.isTypeOf(results.Position, lastCheckpoint, "lastCheckpoint", true);
  ensure.isTypeOf(Function, eventAppeared, "eventAppeared", false);
  if (liveProcessingStarted) ensure.isTypeOf(Function, liveProcessingStarted, "liveProcessingStarted", false);
  if (subscriptionDropped) ensure.isTypeOf(Function, subscriptionDropped, "subscriptionDropped", false);

  var catchUpSubscription =
      new EventStoreAllCatchUpSubscription(this, this._settings.log, lastCheckpoint, resolveLinkTos,
          userCredentials || null, eventAppeared, liveProcessingStarted || null,
          subscriptionDropped || null, this._settings.verboseLogging, readBatchSize || 500);
  catchUpSubscription.start();
  return catchUpSubscription;
};

/**
 * Subscribe to a persistent subscription
 * @public
 * @param {string} stream
 * @param {string} groupName
 * @param {function} eventAppeared
 * @param {function} [subscriptionDropped]
 * @param {UserCredentials} [userCredentials]
 * @param {number} [bufferSize]
 * @param {boolean} [autoAck]
 * @return {Promise<EventStorePersistentSubscription>}
 */
EventStoreNodeConnection.prototype.connectToPersistentSubscription = function(
    stream, groupName, eventAppeared, subscriptionDropped, userCredentials, bufferSize, autoAck
) {
  ensure.notNullOrEmpty(groupName, "groupName");
  ensure.notNullOrEmpty(stream, "stream");
  ensure.notNull(eventAppeared, "eventAppeared");

  subscriptionDropped = subscriptionDropped || null;
  userCredentials = userCredentials || null;
  bufferSize = bufferSize === undefined ? 10 : bufferSize;
  autoAck = autoAck === undefined ? true : Boolean(autoAck);

  var subscription = new EventStorePersistentSubscription(
      groupName, stream, eventAppeared, subscriptionDropped, userCredentials, this._settings.log,
      this._settings.verboseLogging, this._settings, this._handler, bufferSize, autoAck);
  return subscription.start();
};

/**
 * Create a persistent subscription
 * @public
 * @param {string} stream
 * @param {string} groupName
 * @param {PersistentSubscriptionSettings} settings
 * @param {UserCredentials} [userCredentials]
 * @returns {Promise.<PersistentSubscriptionCreateResult>}
 */
EventStoreNodeConnection.prototype.createPersistentSubscription = function(stream, groupName, settings, userCredentials) {
  ensure.notNullOrEmpty(stream, "stream");
  ensure.notNullOrEmpty(groupName, "groupName");
  ensure.notNull(settings, "settings");

  var self = this;
  return new Promise(function(resolve, reject){
    function cb(err, result) {
      if (err) return reject(err);
      resolve(result);
    }
    self._enqueueOperation(
        new CreatePersistentSubscriptionOperation(self._settings.log, cb, stream, groupName, settings, userCredentials || null));
  });
};

/**
 * Update a persistent subscription
 * @public
 * @param {string} stream
 * @param {string} groupName
 * @param {PersistentSubscriptionSettings} settings
 * @param {UserCredentials} [userCredentials]
 * @returns {Promise.<PersistentSubscriptionUpdateResult>}
 */
EventStoreNodeConnection.prototype.updatePersistentSubscription = function(stream, groupName, settings, userCredentials) {
  ensure.notNullOrEmpty(stream, "stream");
  ensure.notNullOrEmpty(groupName, "groupName");
  ensure.notNull(settings, "settings");
  var self = this;
  return new Promise(function(resolve, reject) {
    function cb(err, result) {
      if (err) return reject(err);
      resolve(result);
    }
    self._enqueueOperation(
        new UpdatePersistentSubscriptionOperation(self._settings.log, cb, stream, groupName, settings, userCredentials || null));
  });
};

/**
 * Delete a persistent subscription
 * @public
 * @param {string} stream
 * @param {string} groupName
 * @param {UserCredentials} [userCredentials]
 * @returns {Promise.<PersistentSubscriptionDeleteResult>}
 */
EventStoreNodeConnection.prototype.deletePersistentSubscription = function(stream, groupName, userCredentials) {
  ensure.notNullOrEmpty(stream, "stream");
  ensure.notNullOrEmpty(groupName, "groupName");
  var self = this;
  return new Promise(function(resolve, reject) {
    function cb(err, result) {
      if (err) return reject(err);
      resolve(result);
    }
    self._enqueueOperation(
        new DeletePersistentSubscriptionOperation(self._settings.log, cb, stream, groupName, userCredentials || null));
  });
};

/**
 * Set stream metadata
 * @private
 */
EventStoreNodeConnection.prototype.setStreamMetadata = function() {
  //TODO: set stream metadata (non-raw)
  throw new Error("Not implemented.");
};

/**
 * Set stream metadata with raw object (async)
 * @public
 * @param {string} stream
 * @param {Long|number} expectedMetastreamVersion
 * @param {object} metadata
 * @param {UserCredentials} [userCredentials]
 * @returns {Promise.<WriteResult>}
 */
EventStoreNodeConnection.prototype.setStreamMetadataRaw = function(
    stream, expectedMetastreamVersion, metadata, userCredentials
) {
  ensure.notNullOrEmpty(stream, "stream");
  if (systemStreams.isMetastream(stream)) {
    throw new Error(util.format("Setting metadata for metastream '%s' is not supported.", stream));
  }
  ensure.isLongOrInteger(expectedMetastreamVersion, "expectedMetastreamVersion");
  expectedMetastreamVersion = Long.fromValue(expectedMetastreamVersion);
  var self = this;
  return new Promise(function(resolve, reject) {
    function cb(err, result) {
      if (err) return reject(err);
      resolve(result);
    }
    var data = metadata ? Buffer.from(JSON.stringify(metadata)) : null;
    var metaevent = new EventData(uuid.v4(), systemEventTypes.StreamMetadata, true, data, null);
    self._enqueueOperation(
        new AppendToStreamOperation(self._settings.log, cb, self._settings.requireMaster,
                                    systemStreams.metastreamOf(stream), expectedMetastreamVersion,
                                    [metaevent], userCredentials));
  });
};

/**
 * Get stream metadata
 * @private
 * @param stream
 * @param userCredentials
 */
EventStoreNodeConnection.prototype.getStreamMetadata = function(stream, userCredentials) {
  //TODO: get stream metadata (non-raw)
  throw new Error("Not implemented.");
};

/**
 * Get stream metadata as raw object (async)
 * @public
 * @param {string} stream
 * @param {UserCredentials} [userCredentials]
 * @returns {Promise.<RawStreamMetadataResult>}
 */
EventStoreNodeConnection.prototype.getStreamMetadataRaw = function(stream, userCredentials) {
  return this.readEvent(systemStreams.metastreamOf(stream), -1, false, userCredentials)
      .then(function(res) {
        switch(res.status) {
          case results.EventReadStatus.Success:
            if (res.event === null) throw new Error("Event is null while operation result is Success.");
            var evnt = res.event.originalEvent;
            var version = evnt ? evnt.eventNumber : -1;
            var data = evnt ? JSON.parse(evnt.data.toString()) : null;
            return new results.RawStreamMetadataResult(stream, false, Long.fromValue(version), data);
          case results.EventReadStatus.NotFound:
          case results.EventReadStatus.NoStream:
            return new results.RawStreamMetadataResult(stream, false, Long.fromValue(-1), null);
          case results.EventReadStatus.StreamDeleted:
            return new results.RawStreamMetadataResult(stream, true, Long.fromValue(0x7fffffff), null);
          default:
            throw new Error(util.format("Unexpected ReadEventResult: %s.", res.status));
        }
      });
};

/**
 * Set system settings
 * @private
 */
EventStoreNodeConnection.prototype.setSystemSettings = function() {
  //TODO: set system settings
  throw new Error("Not implemented.");
};

EventStoreNodeConnection.prototype._enqueueOperation = function(operation) {
  var self = this;
  var message = new messages.StartOperationMessage(operation, self._settings.maxRetries, self._settings.operationTimeout);
  function tryEnqueue() {
    if (self._handler.totalOperationCount >= self._settings.maxQueueSize) {
      setTimeout(tryEnqueue, 0);
      return;
    }
    self._handler.enqueueMessage(message);
  }
  setImmediate(tryEnqueue)
};

module.exports = EventStoreNodeConnection;


/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("util");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("uuid");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("events");

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var util = __webpack_require__(12);

function Message() {
}
Message.prototype.toString = function() {
  return this.constructor.name;
};

function StartConnectionMessage(cb, endpointDiscoverer) {
  this.cb = cb;
  this.endpointDiscoverer = endpointDiscoverer;
}
util.inherits(StartConnectionMessage, Message);

function CloseConnectionMessage(reason, error) {
  this.reason = reason;
  this.error = error;
}
util.inherits(CloseConnectionMessage, Message);

function StartOperationMessage(operation, maxRetries, timeout) {
  this.operation = operation;
  this.maxRetries = maxRetries;
  this.timeout = timeout;
}
util.inherits(StartOperationMessage, Message);

function StartSubscriptionMessage(
    cb, streamId, resolveLinkTos, userCredentials, eventAppeared, subscriptionDropped, maxRetries, timeout
) {
  this.cb = cb;
  this.streamId = streamId;
  this.resolveLinkTos = resolveLinkTos;
  this.userCredentials = userCredentials;
  this.eventAppeared = eventAppeared;
  this.subscriptionDropped = subscriptionDropped;
  this.maxRetries = maxRetries;
  this.timeout = timeout;
}
util.inherits(StartSubscriptionMessage, Message);

/**
 * @private
 * @constructor
 * @property {object} endPoints
 * @property {object} endPoints.secureTcpEndPoint
 * @property {object} endPoints.tcpEndPoint
 */
function EstablishTcpConnectionMessage(endPoints) {
  this.endPoints = endPoints;
}
util.inherits(EstablishTcpConnectionMessage, Message);

function HandleTcpPackageMessage(connection, pkg) {
  this.connection = connection;
  this.package = pkg;
}
util.inherits(HandleTcpPackageMessage, Message);

function TcpConnectionErrorMessage(connection, error) {
  this.connection = connection;
  this.error = error;
}
util.inherits(TcpConnectionErrorMessage, Message);

function TcpConnectionEstablishedMessage(connection) {
  this.connection = connection;
}
util.inherits(TcpConnectionEstablishedMessage, Message);

function TcpConnectionClosedMessage(connection, error) {
  this.connection = connection;
  this.error = error;
}
util.inherits(TcpConnectionClosedMessage, Message);

function TimerTickMessage() {}
util.inherits(TimerTickMessage, Message);

function StartPersistentSubscriptionMessage(
    cb, subscriptionId, streamId, bufferSize, userCredentials, eventAppeared, subscriptionDropped,
    maxRetries, operationTimeout
) {
  this.cb = cb;
  this.subscriptionId = subscriptionId;
  this.streamId = streamId;
  this.bufferSize = bufferSize;
  this.userCredentials = userCredentials;
  this.eventAppeared = eventAppeared;
  this.subscriptionDropped = subscriptionDropped;
  this.maxRetries = maxRetries;
  this.timeout = operationTimeout;
}
util.inherits(StartPersistentSubscriptionMessage, Message);

module.exports = {
  StartConnectionMessage: StartConnectionMessage,
  CloseConnectionMessage: CloseConnectionMessage,
  StartOperationMessage: StartOperationMessage,
  StartSubscriptionMessage: StartSubscriptionMessage,
  EstablishTcpConnectionMessage: EstablishTcpConnectionMessage,
  HandleTcpPackageMessage: HandleTcpPackageMessage,
  TcpConnectionErrorMessage: TcpConnectionErrorMessage,
  TcpConnectionEstablishedMessage: TcpConnectionEstablishedMessage,
  TcpConnectionClosedMessage: TcpConnectionClosedMessage,
  TimerTickMessage: TimerTickMessage,
  StartPersistentSubscriptionMessage: StartPersistentSubscriptionMessage
};


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var util = __webpack_require__(12);
var uuid = __webpack_require__(13);
var EventEmitter = __webpack_require__(14).EventEmitter;

var SimpleQueuedHandler = __webpack_require__(17);
var TcpPackageConnection = __webpack_require__(18);
var OperationsManager = __webpack_require__(27);
var SubscriptionsManager = __webpack_require__(29);
var VolatileSubscriptionOperation = __webpack_require__(31);
var ConnectToPersistentSubscriptionOperation = __webpack_require__(38);
var messages = __webpack_require__(15);
var ClientMessage = __webpack_require__(35);
var createBufferSegment = __webpack_require__(20);

var TcpPackage = __webpack_require__(24);
var TcpCommand = __webpack_require__(26);
var TcpFlags = __webpack_require__(25);
var InspectionDecision = __webpack_require__(33);

const ConnectionState = Object.freeze({
  Init: 'init',
  Connecting: 'connecting',
  Connected: 'connected',
  Closed: 'closed'
});

const ConnectingPhase = Object.freeze({
  Invalid: 'invalid',
  Reconnecting: 'reconnecting',
  EndPointDiscovery: 'endpointDiscovery',
  ConnectionEstablishing: 'connectionEstablishing',
  Authentication: 'authentication',
  Identification: 'identification',
  Connected: 'connected'
});

const TimerPeriod = 200;
const TimerTickMessage = new messages.TimerTickMessage();
const EmptyGuid = '00000000-0000-0000-0000-000000000000';
const ClientVersion = 1;

/**
 * @private
 * @param {EventStoreNodeConnection} esConnection
 * @param {Object} settings
 * @constructor
 * @property {Number} totalOperationCount
 */
function EventStoreConnectionLogicHandler(esConnection, settings) {
  EventEmitter.call(this);
  this._esConnection = esConnection;
  this._settings = settings;
  this._queue = new SimpleQueuedHandler(this._settings.log);
  this._state = ConnectionState.Init;
  this._connectingPhase = ConnectingPhase.Invalid;
  this._endpointDiscoverer = null;
  this._connection = null;
  this._wasConnected = false;
  this._packageNumber = 0;
  this._authInfo = null;
  this._lastTimeoutsTimeStamp = 0;

  this._operations = new OperationsManager(esConnection.connectionName, settings);
  this._subscriptions = new SubscriptionsManager(esConnection.connectionName, settings);

  var self = this;
  this._queue.registerHandler(messages.StartConnectionMessage, function(msg) {
    self._startConnection(msg.cb, msg.endpointDiscoverer);
  });
  this._queue.registerHandler(messages.CloseConnectionMessage, function(msg) {
    self._closeConnection(msg.reason, msg.error);
  });

  this._queue.registerHandler(messages.StartOperationMessage, function(msg) {
    self._startOperation(msg.operation, msg.maxRetries, msg.timeout);
  });
  this._queue.registerHandler(messages.StartSubscriptionMessage, function(msg) {
    self._startSubscription(msg);
  });
  this._queue.registerHandler(messages.StartPersistentSubscriptionMessage, function(msg) {
    self._startPersistentSubscription(msg);
  });

  this._queue.registerHandler(messages.EstablishTcpConnectionMessage, function(msg) {
    self._establishTcpConnection(msg.endPoints);
  });
  this._queue.registerHandler(messages.TcpConnectionEstablishedMessage, function(msg) {
    self._tcpConnectionEstablished(msg.connection);
  });
  this._queue.registerHandler(messages.TcpConnectionErrorMessage, function(msg) {
    self._tcpConnectionError(msg.connection, msg.error);
  });
  this._queue.registerHandler(messages.TcpConnectionClosedMessage, function(msg) {
    self._tcpConnectionClosed(msg.connection, msg.error);
  });
  this._queue.registerHandler(messages.HandleTcpPackageMessage, function(msg) {
    self._handleTcpPackage(msg.connection, msg.package);
  });

  this._queue.registerHandler(messages.TimerTickMessage, function(msg) {
    self._timerTick();
  });

  this._timer = setInterval(function() {
    self.enqueueMessage(TimerTickMessage);
  }, TimerPeriod);
}
util.inherits(EventStoreConnectionLogicHandler, EventEmitter);

Object.defineProperty(EventStoreConnectionLogicHandler.prototype, 'totalOperationCount', {
  get: function() {
    return this._operations.totalOperationCount;
  }
});

EventStoreConnectionLogicHandler.prototype.enqueueMessage = function(msg) {
  if (this._settings.verboseLogging && msg !== TimerTickMessage) this._logDebug("enqueuing message %s.", msg);
  this._queue.enqueueMessage(msg);
};

EventStoreConnectionLogicHandler.prototype._discoverEndpoint = function(cb) {
  this._logDebug('DiscoverEndpoint');

  if (this._state !== ConnectionState.Connecting) return;
  if (this._connectingPhase !== ConnectingPhase.Reconnecting) return;

  this._connectingPhase = ConnectingPhase.EndPointDiscovery;

  cb = cb || function() {};

  var self = this;
  this._endpointDiscoverer.discover(this._connection !== null ? this._connection.remoteEndPoint : null)
      .then(function(nodeEndpoints){
        self.enqueueMessage(new messages.EstablishTcpConnectionMessage(nodeEndpoints));
        cb();
      })
      .catch(function(err) {
        self.enqueueMessage(new messages.CloseConnectionMessage("Failed to resolve TCP end point to which to connect.", err));
        cb(new Error("Couldn't resolve target end point: " + err.message));
      });
};

/**
 * @param {Function} cb
 * @param {StaticEndpointDiscoverer} endpointDiscoverer
 * @private
 */
EventStoreConnectionLogicHandler.prototype._startConnection = function(cb, endpointDiscoverer) {
  this._logDebug('StartConnection');

  switch(this._state) {
    case ConnectionState.Init:
      this._endpointDiscoverer = endpointDiscoverer;
      this._state = ConnectionState.Connecting;
      this._connectingPhase = ConnectingPhase.Reconnecting;
      this._discoverEndpoint(cb);
      break;
    case ConnectionState.Connecting:
    case ConnectionState.Connected:
      return cb(new Error(['EventStoreConnection', this._esConnection.connectionName, 'is already active.'].join(' ')));
    case ConnectionState.Closed:
      return cb(new Error(['EventStoreConnection', this._esConnection.connectionName, 'is closed.'].join(' ')));
    default:
      return cb(new Error(['Unknown state:', this._state].join(' ')));
  }
};

/**
 * @param {string} reason
 * @param {Error} [error]
 * @private
 */
EventStoreConnectionLogicHandler.prototype._closeConnection = function(reason, error) {
  if (this._state === ConnectionState.Closed) {
    this._logDebug("CloseConnection IGNORED because is ESConnection is CLOSED, reason %s, error %s.", reason, error ? error.stack : '');
    return;
  }

  this._logDebug("CloseConnection, reason %s, error %s.", reason, error ? error.stack : '');

  this._state = ConnectionState.Closed;

  clearInterval(this._timer);
  this._operations.cleanUp();
  this._subscriptions.cleanUp();
  this._closeTcpConnection(reason);

  this._logInfo("Closed. Reason: %s", reason);

  if (error) this.emit('error', error);

  this.emit('closed', reason);
};

EventStoreConnectionLogicHandler.prototype._closeTcpConnection = function(reason) {
  if (!this._connection) {
    this._logDebug("CloseTcpConnection IGNORED because _connection === null");
    return;
  }

  this._logDebug("CloseTcpConnection");
  this._connection.close(reason);
  this._tcpConnectionClosed(this._connection);
  this._connection = null;
};

var _nextSeqNo = 0;
function createOperationItem(operation, maxRetries, timeout) {
  var operationItem = {
    seqNo: _nextSeqNo++,
    operation: operation,
    maxRetries: maxRetries,
    timeout: timeout,
    createdTime: Date.now(),
    correlationId: uuid.v4(),
    retryCount: 0,
    lastUpdated: Date.now()
  };
  operationItem.toString = (function() {
    return util.format("Operation %s (%s): %s, retry count: %d, created: %s, last updated: %s",
                       this.operation.constructor.name, this.correlationId, this.operation, this.retryCount,
                       new Date(this.createdTime).toISOString().substr(11,12),
                       new Date(this.lastUpdated).toISOString().substr(11,12));
  }).bind(operationItem);
  return operationItem;
}

EventStoreConnectionLogicHandler.prototype._startOperation = function(operation, maxRetries, timeout) {
  switch(this._state) {
    case ConnectionState.Init:
      operation.fail(new Error("EventStoreConnection '" + this._esConnection.connectionName + "' is not active."));
      break;
    case ConnectionState.Connecting:
      this._logDebug("StartOperation enqueue %s, %s, %d, %d.", operation.constructor.name, operation, maxRetries, timeout);
      this._operations.enqueueOperation(createOperationItem(operation, maxRetries, timeout));
      break;
    case ConnectionState.Connected:
      this._logDebug("StartOperation schedule %s, %s, %d, %d.", operation.constructor.name, operation, maxRetries, timeout);
      this._operations.scheduleOperation(createOperationItem(operation, maxRetries, timeout), this._connection);
      break;
    case ConnectionState.Closed:
      operation.fail(new Error("EventStoreConnection '" + this._esConnection.connectionName + "' is closed."));
      break;
    default:
      throw new Error("Unknown state: " + this._state + '.');
  }
};

function createSubscriptionItem(operation, maxRetries, timeout) {
  var subscriptionItem = {
    operation: operation,
    maxRetries: maxRetries,
    timeout: timeout,
    createdTime: Date.now(),
    correlationId: uuid.v4(),
    retryCount: 0,
    lastUpdated: Date.now(),
    isSubscribed: false
  };
  subscriptionItem.toString = (function(){
    return util.format("Subscription %s (%s): %s, is subscribed: %s, retry count: %d, created: %s, last updated: %s",
        this.operation.constructor.name, this.correlationId, this.operation, this.isSubscribed, this.retryCount,
        new Date(this.createdTime).toISOString().substr(11,12),
        new Date(this.lastUpdated).toISOString().substr(11,12));
  }).bind(subscriptionItem);
  return subscriptionItem;
}

EventStoreConnectionLogicHandler.prototype._startSubscription = function(msg) {
  switch (this._state)
  {
    case ConnectionState.Init:
      msg.cb(new Error(util.format("EventStoreConnection '%s' is not active.", this._esConnection.connectionName)));
      break;
    case ConnectionState.Connecting:
    case ConnectionState.Connected:
      var self = this;
      var operation = new VolatileSubscriptionOperation(this._settings.log, msg.cb, msg.streamId, msg.resolveLinkTos,
              msg.userCredentials, msg.eventAppeared, msg.subscriptionDropped,
              this._settings.verboseLogging, function() { return self._connection });
      this._logDebug("StartSubscription %s %s, %s, %d, %d.",
          this._state === ConnectionState.Connected ? "fire" : "enqueue",
          operation.constructor.name, operation, msg.maxRetries, msg.timeout);
      var subscription = createSubscriptionItem(operation, msg.maxRetries, msg.timeout);
      if (this._state === ConnectionState.Connecting) {
        this._subscriptions.enqueueSubscription(subscription);
      } else {
        this._subscriptions.startSubscription(subscription, this._connection);
      }
      break;
    case ConnectionState.Closed:
      msg.cb(new Error("Connection closed. Connection: " + this._esConnection.connectionName));
      break;
    default:
      throw new Error(util.format("Unknown state: %s.", this._state));
  }
};

EventStoreConnectionLogicHandler.prototype._startPersistentSubscription = function(msg) {
  var self = this;
  switch (this._state)
  {
    case ConnectionState.Init:
      msg.cb(new Error(util.format("EventStoreConnection '%s' is not active.", this._esConnection.connectionName)));
      break;
    case ConnectionState.Connecting:
    case ConnectionState.Connected:
      var operation = new ConnectToPersistentSubscriptionOperation(this._settings.log, msg.cb, msg.subscriptionId,
              msg.bufferSize, msg.streamId, msg.userCredentials, msg.eventAppeared, msg.subscriptionDropped,
              this._settings.verboseLogging, function() { return self._connection });
      this._logDebug("StartSubscription %s %s, %s, %d, %d.",
          this._state === ConnectionState.Connected ? "fire" : "enqueue",
          operation.constructor.name, operation, msg.maxRetries, msg.timeout);
      var subscription = createSubscriptionItem(operation, msg.maxRetries, msg.timeout);
      if (this._state === ConnectionState.Connecting) {
        this._subscriptions.enqueueSubscription(subscription);
      } else {
        this._subscriptions.startSubscription(subscription, this._connection);
      }
      break;
    case ConnectionState.Closed:
      msg.cb(new Error("Connection closed. " + this._esConnection.connectionName));
      break;
    default: throw new Error(util.format("Unknown state: %s.", this._state));
  }
};

EventStoreConnectionLogicHandler.prototype._establishTcpConnection = function(endPoints) {
  var endPoint = this._settings.useSslConnection ? endPoints.secureTcpEndPoint : endPoints.tcpEndPoint;
  if (endPoint === null)
  {
    this._closeConnection("No end point to node specified.");
    return;
  }

  this._logDebug("EstablishTcpConnection to [%j]", endPoint);

  if (this._state !== ConnectionState.Connecting) return;
  if (this._connectingPhase !== ConnectingPhase.EndPointDiscovery) return;

  var self = this;
  this._connectingPhase = ConnectingPhase.ConnectionEstablishing;
  this._connection = new TcpPackageConnection(
          this._settings.log,
          endPoint,
          uuid.v4(),
          this._settings.useSslConnection,
          this._settings.targetHost,
          this._settings.validateServer,
          this._settings.clientConnectionTimeout,
          function(connection, pkg) {
            self.enqueueMessage(new messages.HandleTcpPackageMessage(connection, pkg));
          },
          function(connection, error) {
            self.enqueueMessage(new messages.TcpConnectionErrorMessage(connection, error));
          },
          function(connection) {
            connection.startReceiving();
            self.enqueueMessage(new messages.TcpConnectionEstablishedMessage(connection));
          },
          function(connection, error) {
            self.enqueueMessage(new messages.TcpConnectionClosedMessage(connection, error));
          }
      );
};

EventStoreConnectionLogicHandler.prototype._tcpConnectionEstablished = function(connection) {
  if (this._state !== ConnectionState.Connecting || !this._connection || !this._connection.equals(connection) || connection.isClosed)
  {
    this._logDebug("IGNORED (_state %s, _conn.Id %s, conn.Id %s, conn.closed %s): TCP connection to [%j, L%j] established.",
        this._state, this._connection === null ? EmptyGuid : this._connection.connectionId, connection.connectionId,
        connection.isClosed, connection.remoteEndPoint, connection.localEndPoint);
    return;
  }

  this._logDebug("TCP connection to [%j, L%j, %s] established.", connection.remoteEndPoint, connection.localEndPoint, connection.connectionId);
  this._heartbeatInfo = {
    lastPackageNumber: this._packageNumber,
    isIntervalStage: true,
    timeStamp: Date.now()
  };

  if (this._settings.defaultUserCredentials !== null)
  {
    this._connectingPhase = ConnectingPhase.Authentication;

    this._authInfo = {
      correlationId: uuid.v4(),
      timeStamp: Date.now()
    };
    this._connection.enqueueSend(new TcpPackage(
      TcpCommand.Authenticate,
      TcpFlags.Authenticated,
      this._authInfo.correlationId,
      this._settings.defaultUserCredentials.username,
      this._settings.defaultUserCredentials.password));
  }
  else
  {
    this._goToIdentifiedState();
  }
};

EventStoreConnectionLogicHandler.prototype._goToIdentifiedState = function() {
  this._connectingPhase = ConnectingPhase.Identification;
  this._identityInfo = {
    correlationId: uuid.v4(),
    timeStamp: Date.now()
  };
  var dto = new ClientMessage.IdentifyClient({version: ClientVersion, connectionName: this._esConnection.connectionName});
  var buf = dto.constructor.encode(dto).finish();
  this._connection.enqueueSend(new TcpPackage(TcpCommand.IdentifyClient, TcpFlags.None, this._identityInfo.correlationId, null, null, createBufferSegment(buf)))
};

EventStoreConnectionLogicHandler.prototype._goToConnectedState = function() {
  this._state = ConnectionState.Connected;
  this._connectingPhase = ConnectingPhase.Connected;

  this._wasConnected = true;

  this.emit('connected', this._connection.remoteEndPoint);

  if ((Date.now() - this._lastTimeoutsTimeStamp) >= this._settings.operationTimeoutCheckPeriod)
  {
    this._operations.checkTimeoutsAndRetry(this._connection);
    this._subscriptions.checkTimeoutsAndRetry(this._connection);
    this._lastTimeoutsTimeStamp = Date.now();
  }
};

EventStoreConnectionLogicHandler.prototype._tcpConnectionError = function(connection, error) {
  if (!this._connection || !this._connection.equals(connection)) return;
  if (this._state === ConnectionState.Closed) return;

  this._logDebug("TcpConnectionError connId %s, exc %s.", connection.connectionId, error);
  this._closeConnection("TCP connection error occurred.", error);
};

EventStoreConnectionLogicHandler.prototype._tcpConnectionClosed = function(connection, error) {
  if (this._state === ConnectionState.Init) throw new Error();
  if (this._state === ConnectionState.Closed || !this._connection || !this._connection.equals(connection))
  {
    this._logDebug("IGNORED (_state: %s, _conn.ID: %s, conn.ID: %s): TCP connection to [%j, L%j] closed.",
        this._state, this._connection === null ? EmptyGuid : this._connection.connectionId,  connection.connectionId,
        connection.remoteEndPoint, connection.localEndPoint);
    return;
  }

  this._state = ConnectionState.Connecting;
  this._connectingPhase = ConnectingPhase.Reconnecting;

  this._logDebug("TCP connection to [%j, L%j, %s] closed. %s", connection.remoteEndPoint, connection.localEndPoint, connection.connectionId, error);

  this._subscriptions.purgeSubscribedAndDroppedSubscriptions(this._connection.connectionId);
  this._reconnInfo = {
    reconnectionAttempt: this._reconnInfo ? this._reconnInfo.reconnectionAttempt : 0,
    timeStamp: Date.now()
  };

  if (this._wasConnected)
  {
    this._wasConnected = false;
    this.emit('disconnected', connection.remoteEndPoint);
  }
};

EventStoreConnectionLogicHandler.prototype._handleTcpPackage = function(connection, pkg) {
  if (!connection.equals(this._connection) || this._state === ConnectionState.Closed || this._state === ConnectionState.Init)
  {
    this._logDebug("IGNORED: HandleTcpPackage connId %s, package %s, %s.",
                   connection.connectionId, TcpCommand.getName(pkg.command), pkg.correlationId);
    return;
  }

  this._logDebug("HandleTcpPackage connId %s, package %s, %s.",
                 this._connection.connectionId, TcpCommand.getName(pkg.command), pkg.correlationId);
  this._packageNumber += 1;

  if (pkg.command === TcpCommand.HeartbeatResponseCommand)
  {
    if (pkg.correlationId === this._heartbeatInfo.correlationId)
    {
      var now = Date.now();
      var heartbeatEvent = {
        connectionId: this._connection.connectionId,
        remoteEndPoint: this._connection.remoteEndPoint,
        requestSentAt: this._heartbeatInfo.timeStamp,
        requestPkgNumber: this._heartbeatInfo.lastPackageNumber,
        responseReceivedAt: now,
        responsePkgNumber: this._packageNumber
      };
      try {
        this.emit('heartbeatInfo', heartbeatEvent);
      } catch(e) {
        this._logDebug("IGNORED: emit heartbeat event failed.\n%s", e.stack);
      }
    }
    return;
  }
  if (pkg.command === TcpCommand.HeartbeatRequestCommand)
  {
    this._connection.enqueueSend(new TcpPackage(
      TcpCommand.HeartbeatResponseCommand,
      TcpFlags.None,
      pkg.correlationId));
    return;
  }

  if (pkg.command === TcpCommand.Authenticated || pkg.command === TcpCommand.NotAuthenticated)
  {
    if (this._state === ConnectionState.Connecting
        && this._connectingPhase === ConnectingPhase.Authentication
        && this._authInfo.correlationId === pkg.correlationId)
    {
      if (pkg.command === TcpCommand.NotAuthenticated)
        this.emit('authenticationFailed', "Not authenticated");

      this._goToIdentifiedState();
      return;
    }
  }

  if (pkg.command === TcpCommand.ClientIdentified)
  {
    if (this._state === ConnectionState.Connecting
      && this._identityInfo.correlationId === pkg.correlationId)
    {
      this._goToConnectedState();
      return;
    }
  }

  if (pkg.command === TcpCommand.BadRequest && pkg.correlationId === EmptyGuid)
  {
    var message = "<no message>";
    try {
      message = pkg.data.toString();
    } catch(e) {}
    var err = new Error("Bad request received from server. Error: " + message);
    this._closeConnection("Connection-wide BadRequest received. Too dangerous to continue.", err);
    return;
  }

  var operation = this._operations.getActiveOperation(pkg.correlationId);
  if (operation)
  {
    var result = operation.operation.inspectPackage(pkg);
    this._logDebug("HandleTcpPackage OPERATION DECISION %s (%s), %s", result.decision, result.description, operation.operation);
    switch (result.decision)
    {
      case InspectionDecision.DoNothing: break;
      case InspectionDecision.EndOperation:
        this._operations.removeOperation(operation);
        break;
      case InspectionDecision.Retry:
        this._operations.scheduleOperationRetry(operation);
        break;
      case InspectionDecision.Reconnect:
        this._reconnectTo({tcpEndPoint: result.tcpEndPoint, secureTcpEndPoint: result.secureTcpEndPoint});
        this._operations.scheduleOperationRetry(operation);
        break;
      default:
        throw new Error("Unknown InspectionDecision: " + result.decision);
    }
    if (this._state === ConnectionState.Connected) {
      this._operations.scheduleWaitingOperations(connection);
    }

    return;
  }

  var subscription = this._subscriptions.getActiveSubscription(pkg.correlationId);
  if (subscription)
  {
    var result = subscription.operation.inspectPackage(pkg);
    this._logDebug("HandleTcpPackage SUBSCRIPTION DECISION %s (%s), %s", result.decision, result.description, subscription);
    switch (result.decision)
    {
      case InspectionDecision.DoNothing: break;
      case InspectionDecision.EndOperation:
        this._subscriptions.removeSubscription(subscription);
        break;
      case InspectionDecision.Retry:
        this._subscriptions.scheduleSubscriptionRetry(subscription);
        break;
      case InspectionDecision.Reconnect:
        this._reconnectTo({tcpEndPoint: result.tcpEndPoint, secureTcpEndPoint: result.secureTcpEndPoint});
        this._subscriptions.scheduleSubscriptionRetry(subscription);
        break;
      case InspectionDecision.Subscribed:
        subscription.isSubscribed = true;
        break;
      default:
        throw new Error("Unknown InspectionDecision: " + result.decision);
    }

    return;
  }

  this._logDebug("HandleTcpPackage UNMAPPED PACKAGE with CorrelationId %s, Command: %s",
                 pkg.correlationId, TcpCommand.getName(pkg.command));
};

EventStoreConnectionLogicHandler.prototype._reconnectTo = function(endPoints) {
  var endPoint = this._settings.useSslConnection
      ? endPoints.secureTcpEndPoint
      : endPoints.tcpEndPoint;
  if (endPoint === null)
  {
    this._closeConnection("No end point is specified while trying to reconnect.");
    return;
  }

  if (this._state !== ConnectionState.Connected || this._connection.remoteEndPoint === endPoint) return;

  var msg = util.format("EventStoreConnection '%s': going to reconnect to [%j]. Current endpoint: [%j, L%j].",
      this._esConnection.connectionName, endPoint, this._connection.remoteEndPoint, this._connection.localEndPoint);
  if (this._settings.verboseLogging) this._settings.log.info(msg);
  this._closeTcpConnection(msg);

  this._state = ConnectionState.Connecting;
  this._connectingPhase = ConnectingPhase.EndPointDiscovery;
  this._establishTcpConnection(endPoints);
};

EventStoreConnectionLogicHandler.prototype._timerTick = function() {
  switch (this._state)
  {
    case ConnectionState.Init: break;
    case ConnectionState.Connecting:
      if (this._connectingPhase === ConnectingPhase.Reconnecting && (Date.now() - this._reconnInfo.timeStamp) >= this._settings.reconnectionDelay) {
        this._logDebug("TimerTick checking reconnection...");

        this._reconnInfo = {reconnectionAttempt: this._reconnInfo.reconnectionAttempt + 1, timeStamp: Date.now()};
        if (this._settings.maxReconnections >= 0 && this._reconnInfo.reconnectionAttempt > this._settings.maxReconnections) {
          this._closeConnection("Reconnection limit reached.");
        } else {
          this.emit('reconnecting', {});
          this._discoverEndpoint(null);
        }
      } else if (this._connectingPhase === ConnectingPhase.Authentication && (Date.now() - this._authInfo.timeStamp) >= this._settings.operationTimeout) {
        this.emit('authenticationFailed', "Authentication timed out.");
        if (this._clientVersion === 1) {
          this._goToIdentifiedState();
        } else {
          this._goToConnectedState();
        }
      } else if (this._connectingPhase === ConnectingPhase.Authentication || this._connectingPhase === ConnectingPhase.Connected) {
        this._manageHeartbeats();
      }
      break;
    case ConnectionState.Connected:
      // operations timeouts are checked only if connection is established and check period time passed
      if ((Date.now() - this._lastTimeoutsTimeStamp) >= this._settings.operationTimeoutCheckPeriod)
      {
        // On mono even impossible connection first says that it is established
        // so clearing of reconnection count on ConnectionEstablished event causes infinite reconnections.
        // So we reset reconnection count to zero on each timeout check period when connection is established
        this._reconnInfo = {reconnectionAttempt: 0, timeStamp: Date.now()};
        this._operations.checkTimeoutsAndRetry(this._connection);
        this._subscriptions.checkTimeoutsAndRetry(this._connection);
        this._lastTimeoutsTimeStamp = Date.now();
      }
      this._manageHeartbeats();
      break;
    case ConnectionState.Closed:
      break;
    default:
      throw new Error("Unknown state: " + this._state + ".");
  }
};

EventStoreConnectionLogicHandler.prototype._manageHeartbeats = function() {
  if (this._connection === null) return;

  var timeout = this._heartbeatInfo.isIntervalStage ? this._settings.heartbeatInterval : this._settings.heartbeatTimeout;
  if ((Date.now() - this._heartbeatInfo.timeStamp) < timeout) return;

  var packageNumber = this._packageNumber;
  if (this._heartbeatInfo.lastPackageNumber !== packageNumber)
  {
    this._heartbeatInfo = {lastPackageNumber: packageNumber, isIntervalStage: true, timeStamp: Date.now()};
    return;
  }

  if (this._heartbeatInfo.isIntervalStage)
  {
    var correlationId = uuid.v4();
    // TcpMessage.Heartbeat analog
    this._connection.enqueueSend(new TcpPackage(
      TcpCommand.HeartbeatRequestCommand,
      TcpFlags.None,
      correlationId));
    this._heartbeatInfo = {correlationId: correlationId, lastPackageNumber: this._heartbeatInfo.lastPackageNumber, isIntervalStage: false, timeStamp: Date.now()};
  }
  else
  {
    // TcpMessage.HeartbeatTimeout analog
    var msg = util.format("EventStoreConnection '%s': closing TCP connection [%j, L%j, %s] due to HEARTBEAT TIMEOUT at pkgNum %d.",
        this._esConnection.connectionName, this._connection.remoteEndPoint, this._connection.localEndPoint,
        this._connection.connectionId, packageNumber);
    this._settings.log.info(msg);
    this._closeTcpConnection(msg);
  }
};

EventStoreConnectionLogicHandler.prototype._logDebug = function(message) {
  if (!this._settings.verboseLogging) return;

  if (arguments.length > 1) {
    message = util.format.apply(util, Array.prototype.slice.call(arguments));
  }

  this._settings.log.debug("EventStoreConnection '%s': %s", this._esConnection.connectionName, message);
};

EventStoreConnectionLogicHandler.prototype._logInfo = function(message){
  if (arguments.length > 1) {
    message = util.format.apply(util, Array.prototype.slice.call(arguments));
  }

  this._settings.log.info("EventStoreConnection '%s': %s", this._esConnection.connectionName, message);
};

module.exports = EventStoreConnectionLogicHandler;


/***/ }),
/* 17 */
/***/ (function(module, exports) {

function typeName(t) {
  if (typeof t === 'function') return t.name;
  if (typeof t === 'object') return t.constructor.name;
  throw new TypeError('type must be a function or object, not ' + typeof t);
}

function SimpleQueuedHandler(log) {
  this._handlers = {};
  this._messages = [];
  this._isProcessing = false;
  this._log = log;
}

SimpleQueuedHandler.prototype.registerHandler = function(type, handler) {
  var typeId = typeName(type);
  var log = this._log;
  this._handlers[typeId] = function (msg) {
    try {
      handler(msg);
    } catch(e) {
      log.error('handle for', type, 'failed:', e.stack);
    }
  };
};

SimpleQueuedHandler.prototype.enqueueMessage = function(msg) {
  this._messages.push(msg);
  if (!this._isProcessing) {
    this._isProcessing = true;
    setImmediate(this._processQueue.bind(this));
  }
};

SimpleQueuedHandler.prototype._processQueue = function() {
  var message = this._messages.shift();
  while(message) {
    var typeId = typeName(message);
    var handler = this._handlers[typeId];
    if (!handler) throw new Error("No handler registered for message " + typeId);
    setImmediate(handler, message);
    message = this._messages.shift();
  }
  this._isProcessing = false;
};

module.exports = SimpleQueuedHandler;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var util = __webpack_require__(12);

var LengthPrefixMessageFramer = __webpack_require__(19);
var TcpConnection = __webpack_require__(21);
var TcpPackage = __webpack_require__(24);
var TcpCommand = __webpack_require__(26);

/**
 * @private
 * @param log
 * @param remoteEndPoint
 * @param connectionId
 * @param ssl
 * @param targetHost
 * @param validateServer
 * @param timeout
 * @param handlePackage
 * @param onError
 * @param connectionEstablished
 * @param connectionClosed
 * @constructor
 * @property {string} connectionId
 * @property {boolean} isClosed
 * @property {object} remoteEndPoint
 * @property {object} localEndPoint
 */
function TcpPackageConnection(
    log, remoteEndPoint, connectionId, ssl, targetHost, validateServer, timeout,
    handlePackage, onError, connectionEstablished, connectionClosed)
{
  this._connectionId = connectionId;
  this._log = log;
  this._handlePackage = handlePackage;
  this._onError = onError;

  //Setup callback for incoming messages
  this._framer = new LengthPrefixMessageFramer();
  this._framer.registerMessageArrivedCallback(this._incomingMessageArrived.bind(this));

  var self = this;
  this._connection = TcpConnection.createConnectingConnection(
      log,
      connectionId,
      remoteEndPoint,
      ssl,
      targetHost,
      validateServer,
      timeout,
      function(tcpConnection) {
        log.debug("TcpPackageConnection: connected to [%j, L%j, %s].", tcpConnection.remoteEndPoint, tcpConnection.localEndPoint, connectionId);
        connectionEstablished(self);
      },
      function(conn, error) {
        log.debug("TcpPackageConnection: connection to [%j, L%j, %s] failed. Error: %s.", conn.remoteEndPoint, conn.localEndPoint, connectionId, error);
        connectionClosed(self, error);
      },
      function (conn, error) {
        if (error === true) error = new Error('transmission error.');

        log.debug("TcpPackageConnection: connection [%j, L%j, %s] was closed %s", conn.remoteEndPoint, conn.localEndPoint,
            connectionId, error ? "with error: " + error.stack : "cleanly.");

        connectionClosed(self, error);
      });
}
Object.defineProperty(TcpPackageConnection.prototype, 'connectionId', {
  enumerable: true,
  get: function() {
    return this._connectionId;
  }
});
Object.defineProperty(TcpPackageConnection.prototype, 'isClosed', {
  enumerable: true,
  get: function() {
    return this._connection.isClosed;
  }
});
Object.defineProperty(TcpPackageConnection.prototype, 'remoteEndPoint', {
  enumerable: true,
  get: function() {
    return this._connection.remoteEndPoint;
  }
});
Object.defineProperty(TcpPackageConnection.prototype, 'localEndPoint', {
  enumerable: true,
  get: function() {
    return this._connection.localEndPoint;
  }
});

TcpPackageConnection.prototype._onRawDataReceived = function(connection, data) {
  try {
    this._framer.unframeData(data);
  } catch(e) {
    this._log.error(e, "TcpPackageConnection: [%j, L%j, %s]. Invalid TCP frame received.", this.remoteEndPoint, this.localEndPoint, this._connectionId);
    this.close("Invalid TCP frame received");
    return;
  }

  connection.receive(this._onRawDataReceived.bind(this));
};

TcpPackageConnection.prototype._incomingMessageArrived = function(data) {
  var valid = false;
  var pkg;
  try
  {
    pkg = TcpPackage.fromBufferSegment(data);
    valid = true;
    this._handlePackage(this, pkg);
  }
  catch (e)
  {
    this._connection.close(util.format("Error when processing TcpPackage %s: %s",
        valid ? TcpCommand.getName(pkg.command) : "<invalid package>", e.message));

    var message = util.format("TcpPackageConnection: [%j, L%j, %s] ERROR for %s. Connection will be closed.",
        this.remoteEndPoint, this.localEndPoint, this._connectionId,
        valid ? TcpCommand.getName(pkg.command) : "<invalid package>");
    if (this._onError !== null) this._onError(this, e);
    this._log.debug(e, message);
  }
};

TcpPackageConnection.prototype.startReceiving = function() {
  if (this._connection === null) throw new Error("Failed connection.");
  this._connection.receive(this._onRawDataReceived.bind(this));
};

TcpPackageConnection.prototype.enqueueSend = function(pkg) {
  if (this._connection === null) throw new Error("Failed connection.");
  this._connection.enqueueSend(this._framer.frameData(pkg.asBufferSegment()));
};

TcpPackageConnection.prototype.close = function(reason) {
  if (this._connection === null) throw new Error("Failed connection.");
  this._connection.close(reason);
};

TcpPackageConnection.prototype.equals = function(other) {
  if (other === null) return false;
  return this._connectionId === other._connectionId;
};


module.exports = TcpPackageConnection;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var createBufferSegment = __webpack_require__(20);

const HeaderLength = 4;

function LengthPrefixMessageFramer(maxPackageSize) {
  this._maxPackageSize = maxPackageSize || 64*1024*1024;
  this._receivedHandler = null;
  this.reset();
}

LengthPrefixMessageFramer.prototype.reset = function() {
  this._messageBuffer = null;
  this._headerBytes = 0;
  this._packageLength = 0;
  this._bufferIndex = 0;
};

LengthPrefixMessageFramer.prototype.unframeData = function(bufferSegments) {
  for(var i = 0; i < bufferSegments.length; i++) {
    this._parse(bufferSegments[i]);
  }
};

LengthPrefixMessageFramer.prototype._parse = function(bytes) {
  var buffer = bytes.buffer;
  for (var i = bytes.offset; i < bytes.offset + bytes.count; i++)
  {
    if (this._headerBytes < HeaderLength)
    {
      this._packageLength |= (buffer[i] << (this._headerBytes * 8)); // little-endian order
      ++this._headerBytes;
      if (this._headerBytes === HeaderLength)
      {
        if (this._packageLength <= 0 || this._packageLength > this._maxPackageSize) {
          throw new Error(["Package size is out of bounds: ", this._packageLength, "(max: ", this._maxPackageSize, "."].join(''));
        }

        this._messageBuffer = Buffer.alloc(this._packageLength);
      }
    }
    else
    {
      var copyCnt = Math.min(bytes.count + bytes.offset - i, this._packageLength - this._bufferIndex);
      bytes.buffer.copy(this._messageBuffer, this._bufferIndex, i, i + copyCnt);
      this._bufferIndex += copyCnt;
      i += copyCnt - 1;

      if (this._bufferIndex === this._packageLength)
      {
        if (this._receivedHandler !== null) {
          this._receivedHandler(createBufferSegment(this._messageBuffer, 0, this._bufferIndex));
        }
        this.reset();
      }
    }
  }
};

LengthPrefixMessageFramer.prototype.frameData = function(data) {
  var length = data.count;
  var lengthBuffer = Buffer.alloc(HeaderLength);
  lengthBuffer.writeInt32LE(length, 0);
  return [
    createBufferSegment(lengthBuffer, 0, HeaderLength),
    data
  ];
};

LengthPrefixMessageFramer.prototype.registerMessageArrivedCallback = function(handler) {
  this._receivedHandler = handler;
};


module.exports = LengthPrefixMessageFramer;


/***/ }),
/* 20 */
/***/ (function(module, exports) {

/**
 * Create a buffer segment
 * @private
 * @param {Buffer} buf
 * @param {number} [offset]
 * @param {number} [count]
 * @constructor
 */
function BufferSegment(buf, offset, count) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('buf must be a buffer');

  this.buffer = buf;
  this.offset = offset || 0;
  this.count = count || buf.length;
}

BufferSegment.prototype.toString = function() {
  return this.buffer.toString('utf8', this.offset, this.offset + this.count);
};

BufferSegment.prototype.toBuffer = function() {
  if (this.offset === 0 && this.count === this.buffer.length) return this.buffer;
  return this.buffer.slice(this.offset, this.offset + this.count);
};

BufferSegment.prototype.copyTo = function(dst, offset) {
  this.buffer.copy(dst, offset, this.offset, this.offset + this.count);
};

module.exports = function(buf, offset, count) {
  return new BufferSegment(buf, offset, count);
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var net = __webpack_require__(22);
var tls = __webpack_require__(23);
var createBufferSegment = __webpack_require__(20);

const MaxSendPacketSize = 64 * 1024;

function TcpConnection(log, connectionId, remoteEndPoint, onConnectionClosed) {
  this._socket = null;
  this._log = log;
  this._connectionId = connectionId;
  this._remoteEndPoint = remoteEndPoint;
  this._localEndPoint = null;
  this._onConnectionClosed = onConnectionClosed;
  this._receiveCallback = null;
  this._closed = false;
  this._sendQueue = [];
  this._receiveQueue = [];

  Object.defineProperty(this, 'remoteEndPoint', {
    enumerable: true,
    get: function() {
      return this._remoteEndPoint;
    }
  });
  Object.defineProperty(this, 'localEndPoint', {
    enumerable: true,
    get: function() {
      return this._localEndPoint;
    }
  });
}

TcpConnection.prototype._initSocket = function(socket) {
  this._socket = socket;
  this._localEndPoint = {host: socket.localAddress, port: socket.localPort};
  this._remoteEndPoint.host = socket.remoteAddress;

  this._socket.on('error', this._processError.bind(this));
  this._socket.on('drain', this._trySend.bind(this));
  this._socket.on('data', this._processReceive.bind(this));
  this._socket.on('close', this._processClose.bind(this));

  this._trySend();
};

TcpConnection.prototype.enqueueSend = function(bufSegmentArray) {
  for(var i = 0; i < bufSegmentArray.length; i++) {
    var bufSegment = bufSegmentArray[i];
    this._sendQueue.push(bufSegment.toBuffer());
  }

  this._trySend();
};

TcpConnection.prototype._trySend = function() {
  if (this._sendQueue.length === 0 || this._socket === null) return;

  var buffers = [];
  var bytes = 0;
  var sendPiece;
  while((sendPiece = this._sendQueue.shift())) {
    buffers.push(sendPiece);
    bytes += sendPiece.length;
    if (bytes > MaxSendPacketSize) break;
  }

  var joinedBuffers = Buffer.concat(buffers, bytes);
  if (!this._socket.write(joinedBuffers)) return;

  setImmediate(this._trySend.bind(this));
};

TcpConnection.prototype._processError = function(err) {
  this._closeInternal(err, "Socket error");
};

TcpConnection.prototype._processClose = function(had_error) {
  this._closeInternal(had_error, "Socket closed");
};

TcpConnection.prototype._processReceive = function(buf) {
  if (buf.length === 0) {
    //NotifyReceiveCompleted(0);
    this._closeInternal(null, "Socket closed");
    return;
  }

  //NotifyReceiveCompleted(buf.length)
  this._receiveQueue.push(buf);

  this._tryDequeueReceivedData();
};

TcpConnection.prototype.receive = function(cb) {
  this._receiveCallback = cb;
  this._tryDequeueReceivedData();
};

TcpConnection.prototype._tryDequeueReceivedData = function() {
  if (this._receiveCallback === null || this._receiveQueue.length === 0) return;

  var res = [];
  while(this._receiveQueue.length > 0) {
    var buf = this._receiveQueue.shift();
    var bufferSegment = createBufferSegment(buf);
    res.push(bufferSegment);
  }
  var callback = this._receiveCallback;
  this._receiveCallback = null;

  callback(this, res);

  var bytes = 0;
  for(var i=0;i<res.length;i++) {
    bytes += res[i].count;
  }

  //this._pendingReceivedBytes -= bytes;
};

TcpConnection.prototype.close = function(reason) {
  this._closeInternal(null, reason || "Normal socket close.");
};

TcpConnection.prototype._closeInternal = function(err, reason) {
  if (this._closed) return;
  this._closed = true;

  if (this._socket !== null) {
    this._socket.end();
    this._socket.unref();
    this._socket = null;
  }

  if (this._onConnectionClosed !== null) this._onConnectionClosed(this, err);
};

TcpConnection.createConnectingConnection = function(
    log, connectionId, remoteEndPoint, ssl, targetHost, validateServer,
    connectionTimeout, onConnectionEstablished, onConnectionFailed, onConnectionClosed
) {
  var connection = new TcpConnection(log, connectionId, remoteEndPoint, onConnectionClosed);
  var provider = ssl ? tls : net;
  var options = {
    servername: targetHost,
    rejectUnauthorized: validateServer,
    port: remoteEndPoint.port,
    host: remoteEndPoint.host,
    timeout: connectionTimeout
  };
  var socket = provider.connect(options, function() {
    socket.removeListener('error', onError);
    connection._initSocket(socket);
    if (onConnectionEstablished) onConnectionEstablished(connection);
  });
  var timer = setTimeout(function(){
    log.error('TcpConnection: timeout when connecting to %j in %d ms', remoteEndPoint, connectionTimeout);
    connection.close();
    if (onConnectionFailed) onConnectionFailed(connection, new Error('Connection failed'));
  }, connectionTimeout)
  socket.once('error', onError);
  function onError(err) {
    clearTimeout(timer);
    if (onConnectionFailed) onConnectionFailed(connection, err);
  }
  socket.once('connect', onConnect);
  function onConnect() {
    log.info('TcpConnection: successfully connected to %j', remoteEndPoint);
    clearTimeout(timer);
  }
  return connection;
};

module.exports = TcpConnection;


/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("net");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("tls");

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var guidParse = __webpack_require__(3);

var createBufferSegment = __webpack_require__(20);
var TcpFlags = __webpack_require__(25);

const CommandOffset = 0;
const FlagsOffset = CommandOffset + 1;
const CorrelationOffset = FlagsOffset + 1;
const AuthOffset = CorrelationOffset + 16;
const MandatorySize = AuthOffset;

function TcpPackage(command, flags, correlationId, login, password, data) {
  this.command = command;
  this.flags = flags;
  this.correlationId = correlationId;
  this.login = login || null;
  this.password = password || null;
  this.data = data || null;
}

TcpPackage.fromBufferSegment = function(data) {
  if (data.length < MandatorySize) throw new Error("ArraySegment too short, length: " + data.length);

  var command = data.buffer[data.offset + CommandOffset];
  var flags = data.buffer[data.offset + FlagsOffset];

  var correlationId = guidParse.unparse(data.buffer, data.offset + CorrelationOffset);

  var headerSize = MandatorySize;
  var login = null, pass = null;
  if ((flags & TcpFlags.Authenticated) !== 0)
  {
    var loginLen = data.buffer[data.offset + AuthOffset];
    if (AuthOffset + 1 + loginLen + 1 >= data.count) {
      throw new Error("Login length is too big, it doesn't fit into TcpPackage.");
    }
    login = data.buffer.toString('utf8', data.offset + AuthOffset + 1, data.offset + AuthOffset + 1 + loginLen);

    var passLen = data.buffer[data.offset + AuthOffset + 1 + loginLen];
    if (AuthOffset + 1 + loginLen + 1 + passLen > data.count) {
      throw new Error("Password length is too big, it doesn't fit into TcpPackage.");
    }
    headerSize += 1 + loginLen + 1 + passLen;
    pass = data.buffer.toString('utf8', data.offset + AuthOffset + 1 + loginLen + 1, data.offset + headerSize);
  }
  return new TcpPackage(
      command, flags, correlationId, login, pass,
      createBufferSegment(data.buffer, data.offset + headerSize, data.count - headerSize));
};

TcpPackage.prototype.asBuffer = function() {
  if ((this.flags & TcpFlags.Authenticated) !== 0) {
    var loginBytes = Buffer.from(this.login);
    if (loginBytes.length > 255) throw new Error("Login serialized length should be less than 256 bytes.");
    var passwordBytes = Buffer.from(this.password);
    if (passwordBytes.length > 255) throw new Error("Password serialized length should be less than 256 bytes.");

    var res = Buffer.alloc(MandatorySize + 2 + loginBytes.length + passwordBytes.length + (this.data ? this.data.count : 0));
    res[CommandOffset] = this.command;
    res[FlagsOffset] = this.flags;
    guidParse.parse(this.correlationId, res, CorrelationOffset);

    res[AuthOffset] = loginBytes.length;
    loginBytes.copy(res, AuthOffset + 1);
    res[AuthOffset + 1 + loginBytes.length] = passwordBytes.length;
    passwordBytes.copy(res, AuthOffset + 2 + loginBytes.length);

    if (this.data) this.data.copyTo(res, res.length - this.data.count);

    return res;
  } else {
    var res = Buffer.alloc(MandatorySize + (this.data ? this.data.count : 0));
    res[CommandOffset] = this.command;
    res[FlagsOffset] = this.flags;
    guidParse.parse(this.correlationId, res, CorrelationOffset);
    if (this.data) this.data.copyTo(res, AuthOffset);
    return res;
  }
};

TcpPackage.prototype.asBufferSegment = function() {
  return createBufferSegment(this.asBuffer());
};

module.exports = TcpPackage;


/***/ }),
/* 25 */
/***/ (function(module, exports) {

const TcpFlags = Object.freeze({
  None: 0x0,
  Authenticated: 0x01
});

module.exports = TcpFlags;


/***/ }),
/* 26 */
/***/ (function(module, exports) {

const TcpCommand = Object.freeze({
  HeartbeatRequestCommand: 0x01,
  HeartbeatResponseCommand: 0x02,

  Ping: 0x03,
  Pong: 0x04,

  PrepareAck: 0x05,
  CommitAck: 0x06,

  SlaveAssignment: 0x07,
  CloneAssignment: 0x08,

  SubscribeReplica: 0x10,
  ReplicaLogPositionAck: 0x11,
  CreateChunk: 0x12,
  RawChunkBulk: 0x13,
  DataChunkBulk: 0x14,
  ReplicaSubscriptionRetry: 0x15,
  ReplicaSubscribed: 0x16,

  // CLIENT COMMANDS
  //        CreateStream: 0x80,
  //        CreateStreamCompleted: 0x81,

  WriteEvents: 0x82,
  WriteEventsCompleted: 0x83,

  TransactionStart: 0x84,
  TransactionStartCompleted: 0x85,
  TransactionWrite: 0x86,
  TransactionWriteCompleted: 0x87,
  TransactionCommit: 0x88,
  TransactionCommitCompleted: 0x89,

  DeleteStream: 0x8A,
  DeleteStreamCompleted: 0x8B,

  ReadEvent: 0xB0,
  ReadEventCompleted: 0xB1,
  ReadStreamEventsForward: 0xB2,
  ReadStreamEventsForwardCompleted: 0xB3,
  ReadStreamEventsBackward: 0xB4,
  ReadStreamEventsBackwardCompleted: 0xB5,
  ReadAllEventsForward: 0xB6,
  ReadAllEventsForwardCompleted: 0xB7,
  ReadAllEventsBackward: 0xB8,
  ReadAllEventsBackwardCompleted: 0xB9,

  SubscribeToStream: 0xC0,
  SubscriptionConfirmation: 0xC1,
  StreamEventAppeared: 0xC2,
  UnsubscribeFromStream: 0xC3,
  SubscriptionDropped: 0xC4,
  ConnectToPersistentSubscription: 0xC5,
  PersistentSubscriptionConfirmation: 0xC6,
  PersistentSubscriptionStreamEventAppeared: 0xC7,
  CreatePersistentSubscription: 0xC8,
  CreatePersistentSubscriptionCompleted: 0xC9,
  DeletePersistentSubscription: 0xCA,
  DeletePersistentSubscriptionCompleted: 0xCB,
  PersistentSubscriptionAckEvents: 0xCC,
  PersistentSubscriptionNakEvents: 0xCD,
  UpdatePersistentSubscription: 0xCE,
  UpdatePersistentSubscriptionCompleted: 0xCF,

  ScavengeDatabase: 0xD0,
  ScavengeDatabaseCompleted: 0xD1,

  BadRequest: 0xF0,
  NotHandled: 0xF1,
  Authenticate: 0xF2,
  Authenticated: 0xF3,
  NotAuthenticated: 0xF4,
  IdentifyClient: 0xF5,
  ClientIdentified: 0xF6,

  getName: function(v) {
    return _reverseLookup[v];
  }
});

var _reverseLookup = {};
for(var n in TcpCommand) {
  if (n === 'getName') continue;
  var v = TcpCommand[n];
  _reverseLookup[v] = n;
}

module.exports = TcpCommand;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var util = __webpack_require__(12);
var uuid = __webpack_require__(13);

var Hash = __webpack_require__(28);
var TcpCommand = __webpack_require__(26);

/**
 * @private
 * @param {string} connectionName
 * @param {object} settings
 * @constructor
 * @property {number} totalOperationCount
 */
function OperationsManager(connectionName, settings) {
  this._connectionName = connectionName;
  this._settings = settings;

  this._totalOperationCount = 0;
  this._activeOperations = new Hash();
  this._waitingOperations = [];
  this._retryPendingOperations = [];
}
Object.defineProperty(OperationsManager.prototype, 'totalOperationCount', {
  get: function() {
    return this._totalOperationCount;
  }
});

OperationsManager.prototype.getActiveOperation = function(correlationId) {
  return this._activeOperations.get(correlationId);
};

function cleanUpError(connName, state, operation) {
    return new Error(util.format("Connection '%s' was closed. %s %s.", connName, state, operation.toString()));
}

OperationsManager.prototype.cleanUp = function() {
  var self = this;
  this._activeOperations.forEach(function(correlationId, operation){
    operation.operation.fail(cleanUpError(self._connectionName, 'Active', operation));
  });
  this._waitingOperations.forEach(function(operation) {
    operation.operation.fail(cleanUpError(self._connectionName, 'Waiting', operation));
  });
  this._retryPendingOperations.forEach(function(operation) {
    operation.operation.fail(cleanUpError(self._connectionName, 'Pending', operation));
  });

  this._activeOperations.clear();
  this._waitingOperations = [];
  this._retryPendingOperations = [];
  this._totalOperationCount = 0;
};

OperationsManager.prototype.checkTimeoutsAndRetry = function(connection) {
  if (!connection) throw new TypeError("Connection is null.");

  var retryOperations = [];
  var removeOperations = [];
  var self = this;
  this._activeOperations.forEach(function(correlationId, operation) {
    if (operation.connectionId !== connection.connectionId)
    {
      retryOperations.push(operation);
    }
    else if (operation.timeout > 0 && Date.now() - operation.lastUpdated > self._settings.operationTimeout)
    {
      var err = util.format("EventStoreConnection '%s': operation never got response from server.\n"
          + "UTC now: %s, operation: %s.",
          self._connectionName, new Date(), operation);
      self._settings.log.error(err);

      if (self._settings.failOnNoServerResponse)
      {
        operation.operation.fail(new Error(err));
        removeOperations.push(operation);
      }
      else
      {
        retryOperations.push(operation);
      }
    }
  });

  retryOperations.forEach(function(operation) {
    self.scheduleOperationRetry(operation);
  });
  removeOperations.forEach(function(operation) {
    self.removeOperation(operation);
  });

  if (this._retryPendingOperations.length > 0)
  {
    this._retryPendingOperations.sort(function(x,y) {
      if (x.seqNo < y.seqNo) return -1;
      if (x.seqNo > y.seqNo) return 1;
      return 0;
    });
    this._retryPendingOperations.forEach(function(operation) {
      var oldCorrId = operation.correlationId;
      operation.correlationId = uuid.v4();
      operation.retryCount += 1;
      self._logDebug("retrying, old corrId %s, operation %s.", oldCorrId, operation);
      self.scheduleOperation(operation, connection);
    });
    this._retryPendingOperations = [];
  }

  this.scheduleWaitingOperations(connection);
};

OperationsManager.prototype.scheduleOperationRetry = function(operation) {
  if (!this.removeOperation(operation)) return;

  this._logDebug("ScheduleOperationRetry for %s.", operation);
  if (operation.maxRetries >= 0 && operation.retryCount >= operation.maxRetries)
  {
    var err = util.format("Retry limit reached. Operation: %s, RetryCount: %d", operation, operation.retryCount);
    operation.operation.fail(new Error(err));
    return;
  }
  this._retryPendingOperations.push(operation);
};

OperationsManager.prototype.removeOperation = function(operation) {
  this._activeOperations.remove(operation.correlationId);
  this._logDebug("RemoveOperation SUCCEEDED for %s.", operation);
  this._totalOperationCount = this._activeOperations.length + this._waitingOperations.length;
  return true;
};

OperationsManager.prototype.scheduleWaitingOperations = function(connection) {
  if (!connection) throw new TypeError("connection is null.");
  while (this._waitingOperations.length > 0 && this._activeOperations.length < this._settings.maxConcurrentItems)
  {
    this.scheduleOperation(this._waitingOperations.shift(), connection);
  }
  this._totalOperationCount = this._activeOperations.length + this._waitingOperations.length;
};

OperationsManager.prototype.enqueueOperation = function(operation) {
  this._logDebug("EnqueueOperation WAITING for %s.", operation);
  this._waitingOperations.push(operation);
};

OperationsManager.prototype.scheduleOperation = function(operation, connection) {
  if (this._activeOperations.length >= this._settings.maxConcurrentItems)
  {
    this._logDebug("ScheduleOperation WAITING for %s.", operation);
    this._waitingOperations.push(operation);
  }
  else
  {
    operation.connectionId = connection.connectionId;
    operation.lastUpdated = Date.now();
    this._activeOperations.add(operation.correlationId, operation);

    var pkg = operation.operation.createNetworkPackage(operation.correlationId);
    this._logDebug("ScheduleOperation package %s, %s, %s.", TcpCommand.getName(pkg.command), pkg.correlationId, operation);
    connection.enqueueSend(pkg);
  }
  this._totalOperationCount = this._activeOperations.length + this._waitingOperations.length;
};

OperationsManager.prototype._logDebug = function(message) {
  if (!this._settings.verboseLogging) return;

  if (arguments.length > 1) {
    message = util.format.apply(util, Array.prototype.slice.call(arguments));
  }

  this._settings.log.debug("EventStoreConnection '%s': %s.", this._connectionName, message);
};

module.exports = OperationsManager;

/***/ }),
/* 28 */
/***/ (function(module, exports) {

/**
 * @private
 * @constructor
 * @property {number} length
 */
function Hash() {
  this._ = {};
  this._length = 0;
}
Object.defineProperty(Hash.prototype, 'length', {
  get: function() {
    return this._length;
  }
});

Hash.prototype.add = function(key,value) {
  this._[key] = value;
  this._length++;
};

Hash.prototype.clear = function() {
  this._ = {};
  this._length = 0;
};

Hash.prototype.forEach = function(cb) {
  for(var k in this._) {
    cb(k, this._[k]);
  }
};

Hash.prototype.get = function(key) {
  return this._[key];
};

Hash.prototype.remove = function(key) {
  delete this._[key];
  this._length--;
};


module.exports = Hash;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var util = __webpack_require__(12);
var uuid = __webpack_require__(13);
var Hash = __webpack_require__(28);

var SubscriptionDropReason = __webpack_require__(30);

function SubscriptionsManager(connectionName, settings) {
  //Ensure.NotNull(connectionName, "connectionName");
  //Ensure.NotNull(settings, "settings");
  this._connectionName = connectionName;
  this._settings = settings;

  this._activeSubscriptions = new Hash();
  this._waitingSubscriptions = [];
  this._retryPendingSubscriptions = [];
}

SubscriptionsManager.prototype.getActiveSubscription = function(correlationId) {
  return this._activeSubscriptions.get(correlationId);
};

SubscriptionsManager.prototype.cleanUp = function() {
  var connectionClosedError = new Error(util.format("Connection '%s' was closed.", this._connectionName));

  var self = this;
  this._activeSubscriptions.forEach(function(correlationId, subscription){
    subscription.operation.dropSubscription(SubscriptionDropReason.ConnectionClosed, connectionClosedError);
  });
  this._waitingSubscriptions.forEach(function(subscription){
    subscription.operation.dropSubscription(SubscriptionDropReason.ConnectionClosed, connectionClosedError);
  });
  this._retryPendingSubscriptions.forEach(function(subscription){
    subscription.operation.dropSubscription(SubscriptionDropReason.ConnectionClosed, connectionClosedError);
  });

  this._activeSubscriptions.clear();
  this._waitingSubscriptions = [];
  this._retryPendingSubscriptions = [];
};

SubscriptionsManager.prototype.purgeSubscribedAndDroppedSubscriptions = function(connectionId) {
  var self = this;
  var subscriptionsToRemove = [];
  this._activeSubscriptions.forEach(function(_, subscription) {
    if (subscription.isSubscribed && subscription.connectionId === connectionId) {
      subscription.operation.connectionClosed();
      subscriptionsToRemove.push(subscription);
    }
  });
  subscriptionsToRemove.forEach(function(subscription) {
    self._activeSubscriptions.remove(subscription.correlationId);
  });
};

SubscriptionsManager.prototype.checkTimeoutsAndRetry = function(connection) {
  //Ensure.NotNull(connection, "connection");

  var self = this;
  var retrySubscriptions = [];
  var removeSubscriptions = [];
  this._activeSubscriptions.forEach(function(_, subscription) {
    if (subscription.isSubscribed) return;
    if (subscription.connectionId !== connection.connectionId)
    {
      retrySubscriptions.push(subscription);
    }
    else if (subscription.timeout > 0 && Date.now() - subscription.lastUpdated > self._settings.operationTimeout)
    {
      var err = util.format("EventStoreConnection '%s': subscription never got confirmation from server.\n" +
          "UTC now: %s, operation: %s.",
          self._connectionName, new Date(), subscription);
      self._settings.log.error(err);

      if (self._settings.failOnNoServerResponse)
      {
        subscription.operation.dropSubscription(SubscriptionDropReason.SubscribingError, new Error(err));
        removeSubscriptions.push(subscription);
      }
      else
      {
        retrySubscriptions.push(subscription);
      }
    }
  });

  retrySubscriptions.forEach(function(subscription) {
    self.scheduleSubscriptionRetry(subscription);
  });
  removeSubscriptions.forEach(function(subscription) {
    self.removeSubscription(subscription);
  });

  if (this._retryPendingSubscriptions.length > 0)
  {
    this._retryPendingSubscriptions.forEach(function(subscription) {
      subscription.retryCount += 1;
      self.startSubscription(subscription, connection);
    });
    this._retryPendingSubscriptions = [];
  }

  while (this._waitingSubscriptions.length > 0)
  {
    this.startSubscription(this._waitingSubscriptions.shift(), connection);
  }
};

SubscriptionsManager.prototype.removeSubscription = function(subscription) {
  this._activeSubscriptions.remove(subscription.correlationId);
  this._logDebug("RemoveSubscription %s.", subscription);
  return true;
};

SubscriptionsManager.prototype.scheduleSubscriptionRetry = function(subscription) {
  if (!this.removeSubscription(subscription))
  {
    this._logDebug("RemoveSubscription failed when trying to retry %s.", subscription);
    return;
  }

  if (subscription.maxRetries >= 0 && subscription.retryCount >= subscription.maxRetries)
  {
    this._logDebug("RETRIES LIMIT REACHED when trying to retry %s.", subscription);
    var err = util.format("Retries limit reached. Subscription: %s RetryCount: %d.", subscription, subscription.retryCount);
    subscription.operation.dropSubscription(SubscriptionDropReason.SubscribingError, new Error(err));
    return;
  }

  this._logDebug("retrying subscription %s.", subscription);
  this._retryPendingSubscriptions.push(subscription);
};

SubscriptionsManager.prototype.enqueueSubscription = function(subscriptionItem) {
  this._waitingSubscriptions.push(subscriptionItem);
};

SubscriptionsManager.prototype.startSubscription = function(subscription, connection) {
  //Ensure.NotNull(connection, "connection");

  if (subscription.isSubscribed)
  {
    this._logDebug("StartSubscription REMOVING due to already subscribed %s.", subscription);
    this.removeSubscription(subscription);
    return;
  }

  subscription.correlationId = uuid.v4();
  subscription.connectionId = connection.connectionId;
  subscription.lastUpdated = Date.now();

  this._activeSubscriptions.add(subscription.correlationId, subscription);

  if (!subscription.operation.subscribe(subscription.correlationId, connection))
  {
    this._logDebug("StartSubscription REMOVING AS COULDN'T SUBSCRIBE %s.", subscription);
    this.removeSubscription(subscription);
  }
  else
  {
    this._logDebug("StartSubscription SUBSCRIBING %s.", subscription);
  }
};

SubscriptionsManager.prototype._logDebug = function(message) {
  if (!this._settings.verboseLogging) return;

  var parameters = Array.prototype.slice.call(arguments, 1);
  this._settings.log.debug("EventStoreConnection '%s': %s.", this._connectionName, parameters.length === 0 ? message : util.format(message, parameters));
};

module.exports = SubscriptionsManager;

/***/ }),
/* 30 */
/***/ (function(module, exports) {

const SubscriptionDropReason = Object.freeze({
  AccessDenied: 'accessDenied',
  CatchUpError: 'catchUpError',
  ConnectionClosed: 'connectionClosed',
  EventHandlerException: 'eventHandlerException',
  MaxSubscribersReached: 'maxSubscribersReached',
  NotFound: 'notFound',
  PersistentSubscriptionDeleted: 'persistentSubscriptionDeleted',
  ProcessingQueueOverflow: 'processingQueueOverflow',
  ServerError: 'serverError',
  SubscribingError: 'subscribingError',
  UserInitiated: 'userInitiated',
  Unknown: 'unknown'
});

module.exports = SubscriptionDropReason;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var util = __webpack_require__(12);

var SubscriptionOperation = __webpack_require__(32);
var ClientMessage = __webpack_require__(35);
var TcpPackage = __webpack_require__(24);
var TcpCommand = __webpack_require__(26);
var TcpFlags = __webpack_require__(25);
var BufferSegment = __webpack_require__(20);
var InspectionDecision = __webpack_require__(33);
var InspectionResult = __webpack_require__(34);
var results = __webpack_require__(2);
var VolatileEventStoreSubscription = __webpack_require__(36);

function VolatileSubscriptionOperation(
    log, cb, streamId, resolveLinkTos, userCredentials, eventAppeared,
    subscriptionDropped, verboseLogging, getConnection
) {
  SubscriptionOperation.call(this, log, cb, streamId, resolveLinkTos, userCredentials, eventAppeared, subscriptionDropped, verboseLogging, getConnection);
}
util.inherits(VolatileSubscriptionOperation, SubscriptionOperation);

VolatileSubscriptionOperation.prototype._createSubscriptionPackage = function() {
  var dto = new ClientMessage.SubscribeToStream({
      eventStreamId: this._streamId,
      resolveLinkTos: this._resolveLinkTos
  });
  return new TcpPackage(TcpCommand.SubscribeToStream,
      this._userCredentials !== null ? TcpFlags.Authenticated : TcpFlags.None,
      this._correlationId,
      this._userCredentials !== null ? this._userCredentials.username : null,
      this._userCredentials !== null ? this._userCredentials.password : null,
      new BufferSegment(ClientMessage.SubscribeToStream.encode(dto).finish()));
};

VolatileSubscriptionOperation.prototype._inspectPackage = function(pkg) {
  try {
    if (pkg.command === TcpCommand.SubscriptionConfirmation) {
      var dto = ClientMessage.SubscriptionConfirmation.decode(pkg.data.toBuffer());
      this._confirmSubscription(dto.lastCommitPosition, dto.lastEventNumber);
      return new InspectionResult(InspectionDecision.Subscribed, "SubscriptionConfirmation");
    }
    if (pkg.command === TcpCommand.StreamEventAppeared) {
      var dto = ClientMessage.StreamEventAppeared.decode(pkg.data.toBuffer());
      this._onEventAppeared(new results.ResolvedEvent(dto.event));
      return new InspectionResult(InspectionDecision.DoNothing, "StreamEventAppeared");
    }
    return null;
  } catch(e) {
    this._log.warn(e.stack);
    return null;
  }
};

VolatileSubscriptionOperation.prototype._createSubscriptionObject = function(lastCommitPosition, lastEventNumber) {
  return new VolatileEventStoreSubscription(this, this._streamId, lastCommitPosition, lastEventNumber);
};

module.exports = VolatileSubscriptionOperation;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var util = __webpack_require__(12);

var TcpCommand = __webpack_require__(26);
var TcpFlags = __webpack_require__(25);
var InspectionDecision = __webpack_require__(33);
var InspectionResult = __webpack_require__(34);
var ClientMessage = __webpack_require__(35);
var TcpPackage = __webpack_require__(24);
var BufferSegment = __webpack_require__(20);
var results = __webpack_require__(2);
var SubscriptionDropReason = __webpack_require__(30);

//TODO: nodify eventAppeared and subscriptionDropped, should be emit on subscription
function SubscriptionOperation(
    log, cb, streamId, resolveLinkTos, userCredentials, eventAppeared,
    subscriptionDropped, verboseLogging, getConnection
) {
  //TODO: validations
  //Ensure.NotNull(log, "log");
  //Ensure.NotNull(source, "source");
  //Ensure.NotNull(eventAppeared, "eventAppeared");
  //Ensure.NotNull(getConnection, "getConnection");

  this._log = log;
  this._cb = cb;
  this._streamId = streamId || '';
  this._resolveLinkTos = resolveLinkTos;
  this._userCredentials = userCredentials;
  this._eventAppeared = eventAppeared;
  this._subscriptionDropped = subscriptionDropped || function() {};
  this._verboseLogging = verboseLogging;
  this._getConnection = getConnection;

  this._correlationId = null;
  this._unsubscribed = false;
  this._subscription = null;
  this._actionExecuting = false;
  this._actionQueue = [];
}

SubscriptionOperation.prototype._enqueueSend = function(pkg) {
  this._getConnection().enqueueSend(pkg);
};

SubscriptionOperation.prototype.subscribe = function(correlationId, connection) {
  if (connection === null) throw new TypeError("connection is null.");

  if (this._subscription !== null || this._unsubscribed) return false;

  this._correlationId = correlationId;
  connection.enqueueSend(this._createSubscriptionPackage());
  return true;
};

SubscriptionOperation.prototype._createSubscriptionPackage = function() {
  throw new Error("SubscriptionOperation._createSubscriptionPackage abstract method called. " + this.constructor.name);
};

SubscriptionOperation.prototype.unsubscribe = function() {
  this.dropSubscription(SubscriptionDropReason.UserInitiated, null, this._getConnection());
};

SubscriptionOperation.prototype._createUnsubscriptionPackage = function() {
  var msg = new ClientMessage.UnsubscribeFromStream();
  var data = new BufferSegment(ClientMessage.UnsubscribeFromStream.encode(msg).finish());
  return new TcpPackage(TcpCommand.UnsubscribeFromStream, TcpFlags.None, this._correlationId, null, null, data);
};

SubscriptionOperation.prototype._inspectPackage = function(pkg) {
  throw new Error("SubscriptionOperation._inspectPackage abstract method called." + this.constructor.name);
};

SubscriptionOperation.prototype.inspectPackage = function(pkg) {
  try
  {
    var result = this._inspectPackage(pkg);
    if (result !== null) return result;

    switch (pkg.command)
    {
      case TcpCommand.StreamEventAppeared:
      {
        var dto = ClientMessage.StreamEventAppeared.decode(pkg.data.toBuffer());
        this._onEventAppeared(new results.ResolvedEvent(dto.event));
        return new InspectionResult(InspectionDecision.DoNothing, "StreamEventAppeared");
      }

      case TcpCommand.SubscriptionDropped:
      {
        var dto = ClientMessage.SubscriptionDropped.decode(pkg.data.toBuffer());
        switch (dto.reason)
        {
          case ClientMessage.SubscriptionDropped.SubscriptionDropReason.Unsubscribed:
            this.dropSubscription(SubscriptionDropReason.UserInitiated, null);
            break;
          case ClientMessage.SubscriptionDropped.SubscriptionDropReason.AccessDenied:
            this.dropSubscription(SubscriptionDropReason.AccessDenied,
                new Error(util.format("Subscription to '%s' failed due to access denied.", this._streamId || "<all>")));
            break;
          default:
            if (this._verboseLogging) this._log.debug("Subscription dropped by server. Reason: %s.", dto.reason);
            this.dropSubscription(SubscriptionDropReason.Unknown,
                new Error(util.format("Unsubscribe reason: '%s'.", dto.reason)));
            break;
        }
        return new InspectionResult(InspectionDecision.EndOperation, util.format("SubscriptionDropped: %s", dto.reason));
      }

      case TcpCommand.NotAuthenticated:
      {
        var message = pkg.data.toString();
        this.dropSubscription(SubscriptionDropReason.NotAuthenticated,
            new Error(message || "Authentication error"));
        return new InspectionResult(InspectionDecision.EndOperation, "NotAuthenticated");
      }

      case TcpCommand.BadRequest:
      {
        var message = pkg.data.toString();
        this.dropSubscription(SubscriptionDropReason.ServerError,
            new Error("Server error: " + (message || "<no message>")));
        return new InspectionResult(InspectionDecision.EndOperation, util.format("BadRequest: %s", message));
      }

      case TcpCommand.NotHandled:
      {
        if (this._subscription !== null) {
          throw new Error("NotHandled command appeared while we already subscribed.");
        }

        var message = ClientMessage.NotHandled.decode(pkg.data.toBuffer());
        switch (message.reason)
        {
          case ClientMessage.NotHandled.NotHandledReason.NotReady:
            return new InspectionResult(InspectionDecision.Retry, "NotHandled - NotReady");

          case ClientMessage.NotHandled.NotHandledReason.TooBusy:
            return new InspectionResult(InspectionDecision.Retry, "NotHandled - TooBusy");

          case ClientMessage.NotHandled.NotHandledReason.NotMaster:
            var masterInfo = ClientMessage.NotHandled.MasterInfo.decode(message.additionalInfo);
            return new InspectionResult(InspectionDecision.Reconnect, "NotHandled - NotMaster",
                {host: masterInfo.externalTcpAddress, port: masterInfo.externalTcpPort},
                {host: masterInfo.externalSecureTcpAddress, port: masterInfo.externalSecureTcpPort});

          default:
            this._log.error("Unknown NotHandledReason: %s.", message.reason);
            return new InspectionResult(InspectionDecision.Retry, "NotHandled - <unknown>");
        }
      }

      default:
      {
        this.dropSubscription(SubscriptionDropReason.ServerError,
            new Error("Command not expected: " + TcpCommand.getName(pkg.command)));
        return new InspectionResult(InspectionDecision.EndOperation, pkg.command);
      }
    }
  }
  catch (e)
  {
    this.dropSubscription(SubscriptionDropReason.Unknown, e);
    return new InspectionResult(InspectionDecision.EndOperation, util.format("Exception - %s", e.Message));
  }
};

SubscriptionOperation.prototype.connectionClosed = function() {
  this.dropSubscription(SubscriptionDropReason.ConnectionClosed, new Error("Connection was closed."));
};

SubscriptionOperation.prototype.timeOutSubscription = function() {
  if (this._subscription !== null) return false;
  this.dropSubscription(SubscriptionDropReason.SubscribingError, null);
  return true;
};

SubscriptionOperation.prototype.dropSubscription = function(reason, err, connection) {
  if (!this._unsubscribed)
  {
    this._unsubscribed = true;
    if (this._verboseLogging) {
      this._log.debug("Subscription %s to %s: closing subscription, reason: %s, exception: %s...",
        this._correlationId, this._streamId || "<all>", reason, err);
    }

    if (reason !== SubscriptionDropReason.UserInitiated && this._subscription === null)
    {
      if (err === null) throw new Error(util.format("No exception provided for subscription drop reason '%s", reason));
      this._cb(err);
      return;
    }

    if (reason === SubscriptionDropReason.UserInitiated && this._subscription !== null && connection !== null) {
      connection.enqueueSend(this._createUnsubscriptionPackage());
    }

    var self = this;
    if (this._subscription !== null) {
      this._executeAction(function () {
        self._subscriptionDropped(self._subscription, reason, err);
      });
    }
  }
};

SubscriptionOperation.prototype._confirmSubscription = function(lastCommitPosition, lastEventNumber) {
  if (lastCommitPosition < -1) {
    throw new Error(util.format("Invalid lastCommitPosition %s on subscription confirmation.", lastCommitPosition));
  }
  if (this._subscription !== null) {
    throw new Error("Double confirmation of subscription.");
  }

  if (this._verboseLogging) {
    this._log.debug("Subscription %s to %s: subscribed at CommitPosition: %d, EventNumber: %d.",
      this._correlationId, this._streamId || "<all>", lastCommitPosition, lastEventNumber);
  }

  this._subscription = this._createSubscriptionObject(lastCommitPosition, lastEventNumber);
  this._cb(null, this._subscription);
};

SubscriptionOperation.prototype._createSubscriptionObject = function(lastCommitPosition, lastEventNumber) {
  throw new Error("SubscriptionOperation._createSubscriptionObject abstract method called. " + this.constructor.name);
};

SubscriptionOperation.prototype._onEventAppeared = function(e) {
  if (this._unsubscribed) return;

  if (this._subscription === null) throw new Error("Subscription not confirmed, but event appeared!");

  if (this._verboseLogging) {
    this._log.debug("Subscription %s to %s: event appeared (%s, %d, %s @ %s).",
      this._correlationId, this._streamId || "<all>",
      e.originalStreamId, e.originalEventNumber, e.originalEvent.eventType, e.originalPosition);
  }

  var self = this;
  this._executeAction(function() { return self._eventAppeared(self._subscription, e); });
};

SubscriptionOperation.prototype._executeAction = function(action) {
  this._actionQueue.push(action);
  if (!this._actionExecuting) {
    this._actionExecuting = true;
    setImmediate(this._executeActions.bind(this));
  }
};

SubscriptionOperation.prototype._executeActions = function() {
  var action = this._actionQueue.shift();
  if (!action) {
    this._actionExecuting = false;
    return;
  }
  var promise;
  try
  {
    promise = action();
  }
  catch (err)
  {
    this._log.error(err, "Exception during executing user callback: %s.", err.message);
  }
  if (promise && promise.then) {
    var self = this;
    promise
      .catch(function (err) {
        self._log.error(err, "Exception during executing user callback: %s.", err.message);
      })
      .then(this._executeActions.bind(this));
  } else {
    setImmediate(this._executeActions.bind(this));
  }
};

SubscriptionOperation.prototype.toString = function() {
  return this.constructor.name;
};


module.exports = SubscriptionOperation;

/***/ }),
/* 33 */
/***/ (function(module, exports) {

var InspectionDecision = Object.freeze({
  DoNothing: 'doNothing',
  EndOperation: 'endOperation',
  Retry: 'retry',
  Reconnect: 'reconnect',
  Subscribed: 'subscribed'
});

module.exports = InspectionDecision;

/***/ }),
/* 34 */
/***/ (function(module, exports) {

function InspectionResult(decision, description, tcpEndPoint, secureTcpEndPoint) {
  this.decision = decision;
  this.description = description;
  this.tcpEndPoint = tcpEndPoint || null;
  this.secureTcpEndPoint = secureTcpEndPoint || null;
}

module.exports = InspectionResult;

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("../src/messages/clientMessage");

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var util = __webpack_require__(12);

var EventStoreSubsription = __webpack_require__(37);

/**
 * @private
 * @param {SubscriptionOperation} subscriptionOperation
 * @param {string} streamId
 * @param {Position} lastCommitPosition
 * @param {number} lastEventNumber
 * @constructor
 * @augments {EventStoreSubscription}
 */
function VolatileEventStoreSubscription(subscriptionOperation, streamId, lastCommitPosition, lastEventNumber) {
  EventStoreSubsription.call(this, streamId, lastCommitPosition, lastEventNumber);

  this._subscriptionOperation = subscriptionOperation;
}
util.inherits(VolatileEventStoreSubscription, EventStoreSubsription);

VolatileEventStoreSubscription.prototype.unsubscribe = function() {
  this._subscriptionOperation.unsubscribe();
};

module.exports = VolatileEventStoreSubscription;

/***/ }),
/* 37 */
/***/ (function(module, exports) {

/***
 * EventStoreSubscription
 * @param {string} streamId
 * @param {number} lastCommitPosition
 * @param {?number} lastEventNumber
 * @constructor
 * @property {boolean} isSubscribedToAll
 * @property {string} streamId
 * @property {number} lastCommitPosition
 * @property {?number} lastEventNumber
 */
function EventStoreSubscription(streamId, lastCommitPosition, lastEventNumber) {
  Object.defineProperties(this, {
    isSubscribedToAll: {
      value: streamId === ''
    },
    streamId: {
      value: streamId
    },
    lastCommitPosition: {
      value: lastCommitPosition
    },
    lastEventNumber: {
      value: lastEventNumber
    }
  });
}

/**
 * Unsubscribes from the stream
 */
EventStoreSubscription.prototype.close = function() {
  this.unsubscribe();
};

/**
 * Unsubscribes from the stream
 * @abstract
 */
EventStoreSubscription.prototype.unsubscribe = function() {
  throw new Error("EventStoreSubscription.unsubscribe abstract method called." + this.constructor.name);
};

module.exports = EventStoreSubscription;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var util = __webpack_require__(12);
var guidParse = __webpack_require__(3);

var SubscriptionOperation = __webpack_require__(32);
var ClientMessage = __webpack_require__(35);
var TcpCommand = __webpack_require__(26);
var TcpFlags = __webpack_require__(25);
var TcpPackage = __webpack_require__(24);
var createBufferSegment = __webpack_require__(20);
var InspectionResult = __webpack_require__(34);
var InspectionDecision = __webpack_require__(33);
var results = __webpack_require__(2);
var SubscriptionDropReason = __webpack_require__(30);
var PersistentEventStoreSubscription = __webpack_require__(39);
var ensure = __webpack_require__(5);

function ConnectToPersistentSubscriptionOperation(
    log, cb, groupName, bufferSize, streamId, userCredentials, eventAppeared, subscriptionDropped,
    verboseLogging, getConnection
) {
  SubscriptionOperation.call(this, log, cb, streamId, false, userCredentials, eventAppeared, subscriptionDropped, verboseLogging, getConnection);

  this._groupName = groupName;
  this._bufferSize = bufferSize;
  this._subscriptionId = null;
}
util.inherits(ConnectToPersistentSubscriptionOperation, SubscriptionOperation);

ConnectToPersistentSubscriptionOperation.prototype._createSubscriptionPackage = function() {
  var dto = new ClientMessage.ConnectToPersistentSubscription({
    subscriptionId: this._groupName,
    eventStreamId: this._streamId,
    allowedInFlightMessages: this._bufferSize
  });
  return new TcpPackage(TcpCommand.ConnectToPersistentSubscription,
      this._userCredentials !== null ? TcpFlags.Authenticated : TcpFlags.None,
      this._correlationId,
      this._userCredentials !== null ? this._userCredentials.username : null,
      this._userCredentials !== null ? this._userCredentials.password : null,
      createBufferSegment(ClientMessage.ConnectToPersistentSubscription.encode(dto).finish()));
};

ConnectToPersistentSubscriptionOperation.prototype._inspectPackage = function(pkg) {
  if (pkg.command === TcpCommand.PersistentSubscriptionConfirmation)
  {
    var dto = ClientMessage.PersistentSubscriptionConfirmation.decode(pkg.data.toBuffer());
    this._confirmSubscription(dto.lastCommitPosition, dto.lastEventNumber);
    this._subscriptionId = dto.subscriptionId;
    return new InspectionResult(InspectionDecision.Subscribed, "SubscriptionConfirmation");
  }
  if (pkg.command === TcpCommand.PersistentSubscriptionStreamEventAppeared)
  {
    var dto = ClientMessage.PersistentSubscriptionStreamEventAppeared.decode(pkg.data.toBuffer());
    this._onEventAppeared(new results.ResolvedEvent(dto.event));
    return new InspectionResult(InspectionDecision.DoNothing, "StreamEventAppeared");
  }
  if (pkg.command === TcpCommand.SubscriptionDropped)
  {
    var dto = ClientMessage.SubscriptionDropped.decode(pkg.data.toBuffer());
    if (dto.reason === ClientMessage.SubscriptionDropped.SubscriptionDropReason.AccessDenied)
    {
      this.dropSubscription(SubscriptionDropReason.AccessDenied, new Error("You do not have access to the stream."));
      return new InspectionResult(InspectionDecision.EndOperation, "SubscriptionDropped");
    }
    if (dto.reason === ClientMessage.SubscriptionDropped.SubscriptionDropReason.NotFound)
    {
      this.dropSubscription(SubscriptionDropReason.NotFound, new Error("Subscription not found"));
      return new InspectionResult(InspectionDecision.EndOperation, "SubscriptionDropped");
    }
    if (dto.reason === ClientMessage.SubscriptionDropped.SubscriptionDropReason.PersistentSubscriptionDeleted)
    {
      this.dropSubscription(SubscriptionDropReason.PersistentSubscriptionDeleted, new Error("Persistent subscription deleted."));
      return new InspectionResult(InspectionDecision.EndOperation, "SubscriptionDropped");
    }
    if (dto.reason === ClientMessage.SubscriptionDropped.SubscriptionDropReason.SubscriberMaxCountReached)
    {
      this.dropSubscription(SubscriptionDropReason.MaxSubscribersReached, new Error("Maximum subscribers reached."));
      return new InspectionResult(InspectionDecision.EndOperation, "SubscriptionDropped");
    }
    this.dropSubscription(SubscriptionDropReason.UserInitiated, null, this._getConnection());
    return new InspectionResult(InspectionDecision.EndOperation, "SubscriptionDropped");
  }
  return null;
};

ConnectToPersistentSubscriptionOperation.prototype._createSubscriptionObject = function(lastCommitPosition, lastEventNumber) {
  return new PersistentEventStoreSubscription(this, this._streamId, lastCommitPosition, lastEventNumber);
};

ConnectToPersistentSubscriptionOperation.prototype.notifyEventsProcessed = function(processedEvents) {
  ensure.notNull(processedEvents, "processedEvents");
  var dto = new ClientMessage.PersistentSubscriptionAckEvents({
    subscriptionId: this._subscriptionId,
    processedEventIds: processedEvents.map(function (x) {
      return guidParse.parse(x);
    })
  });

  var pkg = new TcpPackage(TcpCommand.PersistentSubscriptionAckEvents,
      this._userCredentials !== null ? TcpFlags.Authenticated : TcpFlags.None,
      this._correlationId,
      this._userCredentials !== null ? this._userCredentials.username : null,
      this._userCredentials !== null ? this._userCredentials.password : null,
      createBufferSegment(ClientMessage.PersistentSubscriptionAckEvents.encode(dto).finish()));
  this._enqueueSend(pkg);
};

ConnectToPersistentSubscriptionOperation.prototype.notifyEventsFailed = function(processedEvents, action, reason) {
  ensure.notNull(processedEvents, "processedEvents");
  ensure.notNull(reason, "reason");
  var dto = new ClientMessage.PersistentSubscriptionNakEvents({
    subscriptionId: this._subscriptionId,
    processedEventIds: processedEvents.map(function(x) { return guidParse.parse(x); }),
    message: reason,
    action: action
  });

  var pkg = new TcpPackage(TcpCommand.PersistentSubscriptionNakEvents,
      this._userCredentials !== null ? TcpFlags.Authenticated : TcpFlags.None,
      this._correlationId,
      this._userCredentials !== null ? this._userCredentials.username : null,
      this._userCredentials !== null ? this._userCredentials.password : null,
      createBufferSegment(ClientMessage.PersistentSubscriptionNakEvents.encode(dto).finish()));
  this._enqueueSend(pkg);
};

module.exports = ConnectToPersistentSubscriptionOperation;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var util = __webpack_require__(12);

var EventStoreSubscription = __webpack_require__(37);


function PersistentEventStoreSubscription(subscriptionOperation, streamId, lastCommitPosition, lastEventNumber) {
  EventStoreSubscription.call(this, streamId, lastCommitPosition, lastEventNumber);

  this._subscriptionOperation = subscriptionOperation;
}
util.inherits(PersistentEventStoreSubscription, EventStoreSubscription);

PersistentEventStoreSubscription.prototype.unsubscribe = function() {
  this._subscriptionOperation.unsubscribe();
};

PersistentEventStoreSubscription.prototype.notifyEventsProcessed = function(processedEvents) {
  this._subscriptionOperation.notifyEventsProcessed(processedEvents);
};

PersistentEventStoreSubscription.prototype.notifyEventsFailed = function(processedEvents, action, reason) {
  this._subscriptionOperation.notifyEventsFailed(processedEvents, action, reason);
};

module.exports = PersistentEventStoreSubscription;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var util = __webpack_require__(12);

var TcpCommand = __webpack_require__(26);
var InspectionDecision = __webpack_require__(33);
var InspectionResult = __webpack_require__(34);
var ClientMessage = __webpack_require__(35);
var results = __webpack_require__(2);
var WrongExpectedVersionError = __webpack_require__(41);
var StreamDeletedError = __webpack_require__(42);
var AccessDeniedError = __webpack_require__(43);

var OperationBase = __webpack_require__(44);


function DeleteStreamOperation(log, cb, requireMaster, stream, expectedVersion, hardDelete, userCredentials) {
  OperationBase.call(this, log, cb, TcpCommand.DeleteStream, TcpCommand.DeleteStreamCompleted, userCredentials);
  this._responseType = ClientMessage.DeleteStreamCompleted;

  this._requireMaster = requireMaster;
  this._stream = stream;
  this._expectedVersion = expectedVersion;
  this._hardDelete = hardDelete;
}
util.inherits(DeleteStreamOperation, OperationBase);

DeleteStreamOperation.prototype._createRequestDto = function() {
  return new ClientMessage.DeleteStream({
    eventStreamId: this._stream,
    expectedVersion: this._expectedVersion,
    requireMaster: this._requireMaster,
    hardDelete: this._hardDelete
  });
};

DeleteStreamOperation.prototype._inspectResponse = function(response) {
  switch (response.result)
  {
    case ClientMessage.OperationResult.Success:
      this._succeed();
      return new InspectionResult(InspectionDecision.EndOperation, "Success");
    case ClientMessage.OperationResult.PrepareTimeout:
      return new InspectionResult(InspectionDecision.Retry, "PrepareTimeout");
    case ClientMessage.OperationResult.CommitTimeout:
      return new InspectionResult(InspectionDecision.Retry, "CommitTimeout");
    case ClientMessage.OperationResult.ForwardTimeout:
      return new InspectionResult(InspectionDecision.Retry, "ForwardTimeout");
    case ClientMessage.OperationResult.WrongExpectedVersion:
      this.fail(new WrongExpectedVersionError("Delete", this._stream, this._expectedVersion));
      return new InspectionResult(InspectionDecision.EndOperation, "WrongExpectedVersion");
    case ClientMessage.OperationResult.StreamDeleted:
      this.fail(new StreamDeletedError(this._stream));
      return new InspectionResult(InspectionDecision.EndOperation, "StreamDeleted");
    case ClientMessage.OperationResult.InvalidTransaction:
      this.fail(new Error("Invalid transaction."));
      return new InspectionResult(InspectionDecision.EndOperation, "InvalidTransaction");
    case ClientMessage.OperationResult.AccessDenied:
      this.fail(new AccessDeniedError("Delete", this._stream));
      return new InspectionResult(InspectionDecision.EndOperation, "AccessDenied");
    default:
      throw new Error(util.format("Unexpected OperationResult: %d.", response.result));
  }
};

DeleteStreamOperation.prototype._transformResponse = function(response) {
  return new results.DeleteResult(new results.Position(response.preparePosition || -1, response.commitPosition || -1));
};

DeleteStreamOperation.prototype.toString = function() {
  return util.format("Stream: %s, ExpectedVersion: %s.", this._stream, this._expectedVersion);
};

module.exports = DeleteStreamOperation;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var util = __webpack_require__(12);
var Long = __webpack_require__(4);

function WrongExpectedVersionError(action, streamOrTransactionId, expectedVersion) {
  Error.captureStackTrace(this, this.constructor);
  this.name = this.constructor.name;
  this.action = action;
  if (typeof streamOrTransactionId === 'string') {
    this.message = util.format("%s failed due to WrongExpectedVersion. Stream: %s Expected version: %d.", action, streamOrTransactionId, expectedVersion);
    this.stream = streamOrTransactionId;
    this.expectedVersion = expectedVersion;
    Object.freeze(this);
    return;
  }
  if (Long.isLong(streamOrTransactionId)) {
    this.message = util.format("%s transaction failed due to WrongExpectedVersion. Transaction Id: %s.", action, streamOrTransactionId);
    this.transactionId = streamOrTransactionId;
    Object.freeze(this);
    return;
  }
  throw new TypeError("second argument must be a stream name or a transaction Id.");
}
util.inherits(WrongExpectedVersionError, Error);

module.exports = WrongExpectedVersionError;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var util = __webpack_require__(12);
var Long = __webpack_require__(4);

function StreamDeletedError(streamOrTransactionId) {
  Error.captureStackTrace(this, this.constructor);
  this.name = this.constructor.name;
  if (typeof streamOrTransactionId === 'string') {
    this.message = util.format("Event stream '%s' is deleted.", streamOrTransactionId);
    this.stream = streamOrTransactionId;
    Object.freeze(this);
    return;
  }
  if (Long.isLong(streamOrTransactionId)) {
    this.message = util.format("Stream is deleted for transaction %s.", streamOrTransactionId);
    this.transactionId = streamOrTransactionId;
    Object.freeze(this);
    return;
  }
  throw new TypeError("second argument must be a stream name or transaction Id.");
}
util.inherits(StreamDeletedError, Error);

module.exports = StreamDeletedError;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var util = __webpack_require__(12);
var Long = __webpack_require__(4);

function AccessDeniedError(action, streamOrTransactionId) {
  Error.captureStackTrace(this, this.constructor);
  this.name = this.constructor.name;
  this.action = action;
  if (typeof streamOrTransactionId === 'string') {
    this.message = util.format("%s access denied for stream '%s'.", action, streamOrTransactionId);
    this.stream = streamOrTransactionId;
    Object.freeze(this);
    return;
  }
  if (Long.isLong(streamOrTransactionId)) {
    this.message = util.format("%s access denied for transaction %s.", action, streamOrTransactionId);
    this.transactionId = streamOrTransactionId;
    Object.freeze(this);
    return;
  }
  throw new TypeError("second argument must be a stream name or transaction Id.");
}
util.inherits(AccessDeniedError, Error);

module.exports = AccessDeniedError;

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var util = __webpack_require__(12);

var TcpPackage = __webpack_require__(24);
var TcpCommand = __webpack_require__(26);
var TcpFlags = __webpack_require__(25);
var InspectionDecision = __webpack_require__(33);
var ClientMessage = __webpack_require__(35);
var InspectionResult = __webpack_require__(34);
var createBufferSegment = __webpack_require__(20);

function OperationBase(log, cb, requestCommand, responseCommand, userCredentials) {
  this.log = log;
  this._cb = cb;
  this._requestCommand = requestCommand;
  this._responseCommand = responseCommand;
  this.userCredentials = userCredentials;

  this._completed = false;
  this._response = null;

  this._responseType = null;
}

OperationBase.prototype._createRequestDto = function() {
  throw new Error('_createRequestDto not implemented.');
};

OperationBase.prototype._inspectResponse = function() {
  throw new Error('_inspectResponse not implemented.');
};

OperationBase.prototype._transformResponse = function() {
  throw new Error('_transformResponse not implemented.');
};

OperationBase.prototype.fail = function(error) {
  this._completed = true;
  this._cb(error);
};

OperationBase.prototype._succeed = function() {
  if (!this._completed) {
    this._completed = true;

    if (this._response) {
      this._cb(null, this._transformResponse(this._response));
    } else {
      this._cb(new Error("No result."))
    }
  }
};

OperationBase.prototype.createNetworkPackage = function(correlationId) {
  var dto = this._createRequestDto();
  var buf = dto.constructor.encode(dto).finish();
  return new TcpPackage(
      this._requestCommand,
      this.userCredentials ? TcpFlags.Authenticated : TcpFlags.None,
      correlationId,
      this.userCredentials ? this.userCredentials.username : null,
      this.userCredentials ? this.userCredentials.password : null,
      createBufferSegment(buf));
};

OperationBase.prototype.inspectPackage = function(pkg) {
  try {
    if (pkg.command === this._responseCommand) {
      this._response = this._responseType.decode(pkg.data.toBuffer());
      return this._inspectResponse(this._response);
    }
    switch (pkg.command) {
      case TcpCommand.NotAuthenticated:
        return this._inspectNotAuthenticated(pkg);
      case TcpCommand.BadRequest:
        return this._inspectBadRequest(pkg);
      case TcpCommand.NotHandled:
        return this._inspectNotHandled(pkg);
      default:
        return this._inspectUnexpectedCommand(pkg, this._responseCommand);
    }
  } catch(e) {
    this.fail(e);
    return new InspectionResult(InspectionDecision.EndOperation, "Error - " + e.message);
  }
};

OperationBase.prototype._inspectNotAuthenticated = function(pkg)
{
  var message = '';
  try {
    message = pkg.data.toString();
  } catch(e) {}
  //TODO typed error
  this.fail(new Error("Authentication error: " + message));
  return new InspectionResult(InspectionDecision.EndOperation, "NotAuthenticated");
};

OperationBase.prototype._inspectBadRequest = function(pkg)
{
  var message = '';
  try {
    message = pkg.data.toString();
  } catch(e) {}
  //TODO typed error
  this.fail(new Error("Bad request: " + message));
  return new InspectionResult(InspectionDecision.EndOperation, "BadRequest - " + message);
};

OperationBase.prototype._inspectNotHandled = function(pkg)
{
  var message = ClientMessage.NotHandled.decode(pkg.data.toBuffer());
  switch (message.reason)
  {
    case ClientMessage.NotHandled.NotHandledReason.NotReady:
      return new InspectionResult(InspectionDecision.Retry, "NotHandled - NotReady");

    case ClientMessage.NotHandled.NotHandledReason.TooBusy:
      return new InspectionResult(InspectionDecision.Retry, "NotHandled - TooBusy");

    case ClientMessage.NotHandled.NotHandledReason.NotMaster:
      var masterInfo = ClientMessage.NotHandled.MasterInfo.decode(message.additionalInfo);
      return new InspectionResult(InspectionDecision.Reconnect, "NotHandled - NotMaster",
          {host: masterInfo.externalTcpAddress, port: masterInfo.externalTcpPort},
          {host: masterInfo.externalSecureTcpAddress, port: masterInfo.externalSecureTcpPort});

    default:
      this.log.error("Unknown NotHandledReason: %s.", message.reason);
      return new InspectionResult(InspectionDecision.Retry, "NotHandled - <unknown>");
  }
};

OperationBase.prototype._inspectUnexpectedCommand = function(pkg, expectedCommand)
{
  if (pkg.command === expectedCommand) throw new Error("Command shouldn't be " + TcpCommand.getName(pkg.command));

  this.log.error("Unexpected TcpCommand received.\n"
      + "Expected: %s, Actual: %s, Flags: %s, CorrelationId: %s\n"
      + "Operation (%s): %s\n"
      + "TcpPackage Data Dump:\n%j",
      expectedCommand, TcpCommand.getName(pkg.command), pkg.flags, pkg.correlationId,
      this.constructor.name, this, pkg.data);

  this.fail(new Error(util.format("Unexpected command. Expecting %s got %s.", TcpCommand.getName(expectedCommand), TcpCommand.getName(pkg.command))));
  return new InspectionResult(InspectionDecision.EndOperation, "Unexpected command - " + TcpCommand.getName(pkg.command));
};


module.exports = OperationBase;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

var util = __webpack_require__(12);
var guidParse = __webpack_require__(3);

var TcpCommand = __webpack_require__(26);
var InspectionDecision = __webpack_require__(33);
var InspectionResult = __webpack_require__(34);
var ClientMessage = __webpack_require__(35);
var WriteResult = __webpack_require__(2).WriteResult;
var Position = __webpack_require__(2).Position;
var WrongExpectedVersionError = __webpack_require__(41);
var StreamDeletedError = __webpack_require__(42);
var AccessDeniedError = __webpack_require__(43);

var OperationBase = __webpack_require__(44);

function AppendToStreamOperation(log, cb, requireMaster, stream, expectedVersion, events, userCredentials) {
  OperationBase.call(this, log, cb, TcpCommand.WriteEvents, TcpCommand.WriteEventsCompleted, userCredentials);
  this._responseType = ClientMessage.WriteEventsCompleted;

  this._requireMaster = requireMaster;
  this._stream = stream;
  this._expectedVersion = expectedVersion;
  this._events = events;
}
util.inherits(AppendToStreamOperation, OperationBase);

AppendToStreamOperation.prototype._createRequestDto = function() {
  var dtos = this._events.map(function(ev) {
    var eventId = guidParse.parse(ev.eventId);
    return {
      eventId: eventId, eventType: ev.type,
      dataContentType: ev.isJson ? 1 : 0, metadataContentType: 0,
      data: ev.data, metadata: ev.metadata
    };
  });
  return new ClientMessage.WriteEvents({
    eventStreamId: this._stream,
    expectedVersion: this._expectedVersion,
    events: dtos,
    requireMaster: this._requireMaster});
};

AppendToStreamOperation.prototype._inspectResponse = function(response) {
  switch (response.result)
  {
    case ClientMessage.OperationResult.Success:
      if (this._wasCommitTimeout) this.log.debug("IDEMPOTENT WRITE SUCCEEDED FOR %s.", this);
      this._succeed();
      return new InspectionResult(InspectionDecision.EndOperation, "Success");
    case ClientMessage.OperationResult.PrepareTimeout:
      return new InspectionResult(InspectionDecision.Retry, "PrepareTimeout");
    case ClientMessage.OperationResult.ForwardTimeout:
      return new InspectionResult(InspectionDecision.Retry, "ForwardTimeout");
    case ClientMessage.OperationResult.CommitTimeout:
      this._wasCommitTimeout = true;
      return new InspectionResult(InspectionDecision.Retry, "CommitTimeout");
    case ClientMessage.OperationResult.WrongExpectedVersion:
      this.fail(new WrongExpectedVersionError("Append", this._stream, this._expectedVersion));
      return new InspectionResult(InspectionDecision.EndOperation, "WrongExpectedVersion");
    case ClientMessage.OperationResult.StreamDeleted:
      this.fail(new StreamDeletedError(this._stream));
      return new InspectionResult(InspectionDecision.EndOperation, "StreamDeleted");
    case ClientMessage.OperationResult.InvalidTransaction:
      this.fail(new Error("Invalid transaction."));
      return new InspectionResult(InspectionDecision.EndOperation, "InvalidTransaction");
    case ClientMessage.OperationResult.AccessDenied:
      this.fail(new AccessDeniedError("Write", this._stream));
      return new InspectionResult(InspectionDecision.EndOperation, "AccessDenied");
    default:
      throw new Error("Unexpected OperationResult: " + response.result);
  }
};

AppendToStreamOperation.prototype._transformResponse = function(response) {
  return new WriteResult(response.lastEventNumber, new Position(response.preparePosition || -1, response.commitPosition || -1));
};

AppendToStreamOperation.prototype.toString = function() {
  return util.format("Stream: %s, ExpectedVersion: %d", this._stream, this._expectedVersion);
};

module.exports = AppendToStreamOperation;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var util = __webpack_require__(12);

var TcpCommand = __webpack_require__(26);
var InspectionDecision = __webpack_require__(33);
var InspectionResult = __webpack_require__(34);
var ClientMessage = __webpack_require__(35);
var EventStoreTransaction = __webpack_require__(47);
var AccessDeniedError = __webpack_require__(43);
var WrongExpectedVersionError = __webpack_require__(41);
var StreamDeletedError = __webpack_require__(42);
var OperationBase = __webpack_require__(44);

function StartTransactionOperation(log, cb, requireMaster, stream, expectedVersion, parentConnection, userCredentials) {
  OperationBase.call(this, log, cb, TcpCommand.TransactionStart, TcpCommand.TransactionStartCompleted, userCredentials);
  this._responseType = ClientMessage.TransactionStartCompleted;

  this._requireMaster = requireMaster;
  this._stream = stream;
  this._expectedVersion = expectedVersion;
  this._parentConnection = parentConnection;
}
util.inherits(StartTransactionOperation, OperationBase);

StartTransactionOperation.prototype._createRequestDto = function() {
  return new ClientMessage.TransactionStart({
      eventStreamId: this._stream,
      expectedVersion: this._expectedVersion,
      requireMaster: this._requireMaster
  });
};

StartTransactionOperation.prototype._inspectResponse = function(response) {
  switch (response.result)
  {
    case ClientMessage.OperationResult.Success:
      this._succeed();
      return new InspectionResult(InspectionDecision.EndOperation, "Success");
    case ClientMessage.OperationResult.PrepareTimeout:
      return new InspectionResult(InspectionDecision.Retry, "PrepareTimeout");
    case ClientMessage.OperationResult.CommitTimeout:
      return new InspectionResult(InspectionDecision.Retry, "CommitTimeout");
    case ClientMessage.OperationResult.ForwardTimeout:
      return new InspectionResult(InspectionDecision.Retry, "ForwardTimeout");
    case ClientMessage.OperationResult.WrongExpectedVersion:
      this.fail(new WrongExpectedVersionError("Start transaction", this._stream, this._expectedVersion));
      return new InspectionResult(InspectionDecision.EndOperation, "WrongExpectedVersion");
    case ClientMessage.OperationResult.StreamDeleted:
      this.fail(new StreamDeletedError(this._stream));
      return new InspectionResult(InspectionDecision.EndOperation, "StreamDeleted");
    case ClientMessage.OperationResult.InvalidTransaction:
      this.fail(new Error("Invalid transaction."));
      return new InspectionResult(InspectionDecision.EndOperation, "InvalidTransaction");
    case ClientMessage.OperationResult.AccessDenied:
      this.fail(new AccessDeniedError("Write", this._stream));
      return new InspectionResult(InspectionDecision.EndOperation, "AccessDenied");
    default:
      throw new Error(util.format("Unexpected OperationResult: %s.", response.result));
  }
};

StartTransactionOperation.prototype._transformResponse = function(response) {
  return new EventStoreTransaction(response.transactionId, this.userCredentials, this._parentConnection);
};

StartTransactionOperation.prototype.toString = function() {
  return util.format("Stream: %s, ExpectedVersion: %d", this._stream, this._expectedVersion);
};

module.exports = StartTransactionOperation;

/***/ }),
/* 47 */
/***/ (function(module, exports) {

/**
 * @param {number} transactionId
 * @param {UserCredentials} userCredentials
 * @param {EventStoreNodeConnection} connection
 * @constructor
 * @property {number} transactionId
 */
function EventStoreTransaction(transactionId, userCredentials, connection) {
  this._transactionId = transactionId;
  this._userCredentials = userCredentials;
  this._connection = connection;

  this._isCommitted = false;
  this._isRolledBack = false;

  Object.defineProperties(this, {
    transactionId: {
      enumerable: true, get: function() { return this._transactionId; }
    }
  });
}

/**
 * Commit (async)
 * @returns {Promise.<WriteResult>}
 */
EventStoreTransaction.prototype.commit = function() {
  if (this._isRolledBack) throw new Error("Can't commit a rolledback transaction.");
  if (this._isCommitted) throw new Error("Transaction is already committed.");
  this._isCommitted = true;
  return this._connection.commitTransaction(this, this._userCredentials);
};

/**
 * Write events (async)
 * @param {EventData|EventData[]} eventOrEvents
 * @returns {Promise}
 */
EventStoreTransaction.prototype.write = function(eventOrEvents) {
  if (this._isRolledBack) throw new Error("can't write to a rolledback transaction");
  if (this._isCommitted) throw new Error("Transaction is already committed");
  var events = Array.isArray(eventOrEvents) ? eventOrEvents : [eventOrEvents];
  return this._connection.transactionalWrite(this, events);
};

/**
 * Rollback
 */
EventStoreTransaction.prototype.rollback = function() {
  if (this._isCommitted) throw new Error("Transaction is already committed");
  this._isRolledBack = true;
};

module.exports = EventStoreTransaction;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var util = __webpack_require__(12);
var guidParse = __webpack_require__(3);

var TcpCommand = __webpack_require__(26);
var InspectionDecision = __webpack_require__(33);
var InspectionResult = __webpack_require__(34);
var ClientMessage = __webpack_require__(35);
var AccessDeniedError = __webpack_require__(43);

var OperationBase = __webpack_require__(44);


function TransactionalWriteOperation(log, cb, requireMaster, transactionId, events, userCredentials) {
  OperationBase.call(this, log, cb, TcpCommand.TransactionWrite, TcpCommand.TransactionWriteCompleted, userCredentials);
  this._responseType = ClientMessage.TransactionWriteCompleted;

  this._requireMaster = requireMaster;
  this._transactionId = transactionId;
  this._events = events;
}
util.inherits(TransactionalWriteOperation, OperationBase);

TransactionalWriteOperation.prototype._createRequestDto = function() {
  var dtos = this._events.map(function(ev) {
    var eventId = guidParse.parse(ev.eventId);
    return {
      eventId: eventId, eventType: ev.type,
      dataContentType: ev.isJson ? 1 : 0, metadataContentType: 0,
      data: ev.data, metadata: ev.metadata
    };
  });
  return new ClientMessage.TransactionWrite({
    transactionId: this._transactionId,
    events: dtos,
    requireMaster: this._requireMaster
  });
};

TransactionalWriteOperation.prototype._inspectResponse = function(response) {
  switch (response.result)
  {
    case ClientMessage.OperationResult.Success:
      this._succeed();
      return new InspectionResult(InspectionDecision.EndOperation, "Success");
    case ClientMessage.OperationResult.PrepareTimeout:
      return new InspectionResult(InspectionDecision.Retry, "PrepareTimeout");
    case ClientMessage.OperationResult.CommitTimeout:
      return new InspectionResult(InspectionDecision.Retry, "CommitTimeout");
    case ClientMessage.OperationResult.ForwardTimeout:
      return new InspectionResult(InspectionDecision.Retry, "ForwardTimeout");
    case ClientMessage.OperationResult.AccessDenied:
      this.fail(new AccessDeniedError("Write", "trx:" + this._transactionId));
      return new InspectionResult(InspectionDecision.EndOperation, "AccessDenied");
    default:
      throw new Error(util.format("Unexpected OperationResult: %s.", response.result));
  }
};

TransactionalWriteOperation.prototype._transformResponse = function(response) {
  return null;
};

TransactionalWriteOperation.prototype.toString = function() {
  return util.format("TransactionId: %s", this._transactionId);
};

module.exports = TransactionalWriteOperation;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var util = __webpack_require__(12);

var TcpCommand = __webpack_require__(26);
var InspectionDecision = __webpack_require__(33);
var InspectionResult = __webpack_require__(34);
var ClientMessage = __webpack_require__(35);
var results = __webpack_require__(2);
var WrongExpectedVersionError = __webpack_require__(41);
var StreamDeletedError = __webpack_require__(42);
var AccessDeniedError = __webpack_require__(43);

var OperationBase = __webpack_require__(44);


function CommitTransactionOperation(log, cb, requireMaster, transactionId, userCredentials) {
  OperationBase.call(this, log, cb, TcpCommand.TransactionCommit, TcpCommand.TransactionCommitCompleted, userCredentials);
  this._responseType = ClientMessage.TransactionCommitCompleted;

  this._requireMaster = requireMaster;
  this._transactionId = transactionId;
}
util.inherits(CommitTransactionOperation, OperationBase);

CommitTransactionOperation.prototype._createRequestDto = function() {
  return new ClientMessage.TransactionCommit({
    transactionId: this._transactionId,
    requireMaster: this._requireMaster
  });
};

CommitTransactionOperation.prototype._inspectResponse = function(response) {
  switch (response.result)
  {
    case ClientMessage.OperationResult.Success:
      this._succeed();
      return new InspectionResult(InspectionDecision.EndOperation, "Success");
    case ClientMessage.OperationResult.PrepareTimeout:
      return new InspectionResult(InspectionDecision.Retry, "PrepareTimeout");
    case ClientMessage.OperationResult.CommitTimeout:
      return new InspectionResult(InspectionDecision.Retry, "CommitTimeout");
    case ClientMessage.OperationResult.ForwardTimeout:
      return new InspectionResult(InspectionDecision.Retry, "ForwardTimeout");
    case ClientMessage.OperationResult.WrongExpectedVersion:
      this.fail(new WrongExpectedVersionError("Commit", this._transactionId));
      return new InspectionResult(InspectionDecision.EndOperation, "WrongExpectedVersion");
    case ClientMessage.OperationResult.StreamDeleted:
      this.fail(new StreamDeletedError(this._transactionId));
      return new InspectionResult(InspectionDecision.EndOperation, "StreamDeleted");
    case ClientMessage.OperationResult.InvalidTransaction:
      this.fail(new Error("Invalid transaction."));
      return new InspectionResult(InspectionDecision.EndOperation, "InvalidTransaction");
    case ClientMessage.OperationResult.AccessDenied:
      this.fail(new AccessDeniedError("Write", this._transactionId));
      return new InspectionResult(InspectionDecision.EndOperation, "AccessDenied");
    default:
      throw new Error(util.format("Unexpected OperationResult: %s.", response.result));
  }
};

CommitTransactionOperation.prototype._transformResponse = function(response) {
  var logPosition = new results.Position(response.preparePosition || -1, response.commitPosition || -1);
  return new results.WriteResult(response.lastEventNumber, logPosition);
};

CommitTransactionOperation.prototype.toString = function() {
  return util.format("TransactionId: %s", this._transactionId);
};

module.exports = CommitTransactionOperation;

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var util = __webpack_require__(12);

var TcpCommand = __webpack_require__(26);
var ClientMessage = __webpack_require__(35);
var InspectionResult = __webpack_require__(34);
var InspectionDecision = __webpack_require__(33);
var results = __webpack_require__(2);
var AccessDeniedError = __webpack_require__(43);

var OperationBase = __webpack_require__(44);

function ReadEventOperation(log, cb, stream, eventNumber, resolveLinkTos, requireMaster, userCredentials) {
  OperationBase.call(this, log, cb, TcpCommand.ReadEvent, TcpCommand.ReadEventCompleted, userCredentials);
  this._responseType = ClientMessage.ReadEventCompleted;

  this._stream = stream;
  this._eventNumber = eventNumber;
  this._resolveLinkTos = resolveLinkTos;
  this._requireMaster = requireMaster;
}
util.inherits(ReadEventOperation, OperationBase);

ReadEventOperation.prototype._createRequestDto = function() {
  return new ClientMessage.ReadEvent({
      eventStreamId: this._stream,
      eventNumber: this._eventNumber,
      resolveLinkTos: this._resolveLinkTos,
      requireMaster: this._requireMaster
  });
};

ReadEventOperation.prototype._inspectResponse = function(response) {
  switch (response.result)
  {
    case ClientMessage.ReadEventCompleted.ReadEventResult.Success:
      this._succeed();
      return new InspectionResult(InspectionDecision.EndOperation, "Success");
    case ClientMessage.ReadEventCompleted.ReadEventResult.NotFound:
      this._succeed();
      return new InspectionResult(InspectionDecision.EndOperation, "NotFound");
    case ClientMessage.ReadEventCompleted.ReadEventResult.NoStream:
      this._succeed();
      return new InspectionResult(InspectionDecision.EndOperation, "NoStream");
    case ClientMessage.ReadEventCompleted.ReadEventResult.StreamDeleted:
      this._succeed();
      return new InspectionResult(InspectionDecision.EndOperation, "StreamDeleted");
    case ClientMessage.ReadEventCompleted.ReadEventResult.Error:
      this.fail(new Error("Server error: " + response.error));
      return new InspectionResult(InspectionDecision.EndOperation, "Error");
    case ClientMessage.ReadEventCompleted.ReadEventResult.AccessDenied:
      this.fail(new AccessDeniedError("Read", this._stream));
      return new InspectionResult(InspectionDecision.EndOperation, "AccessDenied");
    default:
      throw new Error(util.format("Unexpected ReadEventResult: %s.", response.result));
  }
};

ReadEventOperation.prototype._transformResponse = function(response) {
  return new results.EventReadResult(convert(response.result), this._stream, this._eventNumber, response.event);
};

function convert(result)
{
  switch (result)
  {
    case ClientMessage.ReadEventCompleted.ReadEventResult.Success:
      return results.EventReadStatus.Success;
    case ClientMessage.ReadEventCompleted.ReadEventResult.NotFound:
      return results.EventReadStatus.NotFound;
    case ClientMessage.ReadEventCompleted.ReadEventResult.NoStream:
      return results.EventReadStatus.NoStream;
    case ClientMessage.ReadEventCompleted.ReadEventResult.StreamDeleted:
      return results.EventReadStatus.StreamDeleted;
    default:
      throw new Error(util.format("Unexpected ReadEventResult: %s.", result));
  }
}

ReadEventOperation.prototype.toString = function() {
  return util.format("Stream: %s, EventNumber: %s, ResolveLinkTo: %s, RequireMaster: %s",
      this._stream, this._eventNumber, this._resolveLinkTos, this._requireMaster);
};

module.exports = ReadEventOperation;

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var util = __webpack_require__(12);

var TcpCommand = __webpack_require__(26);
var ClientMessage = __webpack_require__(35);
var ReadDirection = __webpack_require__(52);
var StatusCode = __webpack_require__(53);
var InspectionResult = __webpack_require__(34);
var InspectionDecision = __webpack_require__(33);
var results = __webpack_require__(2);
var AccessDeniedError = __webpack_require__(43);

var OperationBase = __webpack_require__(44);

function ReadStreamEventsForwardOperation(
    log, cb, stream, fromEventNumber, maxCount, resolveLinkTos, requireMaster, userCredentials
) {
  OperationBase.call(this, log, cb, TcpCommand.ReadStreamEventsForward, TcpCommand.ReadStreamEventsForwardCompleted, userCredentials);
  this._responseType = ClientMessage.ReadStreamEventsCompleted;

  this._stream = stream;
  this._fromEventNumber = fromEventNumber;
  this._maxCount = maxCount;
  this._resolveLinkTos = resolveLinkTos;
  this._requireMaster = requireMaster;
}
util.inherits(ReadStreamEventsForwardOperation, OperationBase);

ReadStreamEventsForwardOperation.prototype._createRequestDto = function() {
  return new ClientMessage.ReadStreamEvents({
      eventStreamId: this._stream,
      fromEventNumber: this._fromEventNumber,
      maxCount: this._maxCount,
      resolveLinkTos: this._resolveLinkTos,
      requireMaster: this._requireMaster
  });
};

ReadStreamEventsForwardOperation.prototype._inspectResponse = function(response) {
  switch (response.result)
  {
    case ClientMessage.ReadStreamEventsCompleted.ReadStreamResult.Success:
      this._succeed();
      return new InspectionResult(InspectionDecision.EndOperation, "Success");
    case ClientMessage.ReadStreamEventsCompleted.ReadStreamResult.StreamDeleted:
      this._succeed();
      return new InspectionResult(InspectionDecision.EndOperation, "StreamDeleted");
    case ClientMessage.ReadStreamEventsCompleted.ReadStreamResult.NoStream:
      this._succeed();
      return new InspectionResult(InspectionDecision.EndOperation, "NoStream");
    case ClientMessage.ReadStreamEventsCompleted.ReadStreamResult.Error:
      this.fail(new Error("Server error: " + response.error));
      return new InspectionResult(InspectionDecision.EndOperation, "Error");
    case ClientMessage.ReadStreamEventsCompleted.ReadStreamResult.AccessDenied:
      this.fail(new AccessDeniedError("Read", this._stream));
      return new InspectionResult(InspectionDecision.EndOperation, "AccessDenied");
    default:
      throw new Error(util.format("Unexpected ReadStreamResult: %s.", response.result));
  }
};

ReadStreamEventsForwardOperation.prototype._transformResponse = function(response) {
  return new results.StreamEventsSlice(
      StatusCode.convert(response.result),
      this._stream,
      this._fromEventNumber,
      ReadDirection.Forward,
      response.events,
      response.nextEventNumber,
      response.lastEventNumber,
      response.isEndOfStream
  )
};

ReadStreamEventsForwardOperation.prototype.toString = function() {
  return util.format("Stream: %s, FromEventNumber: %d, MaxCount: %d, ResolveLinkTos: %s, RequireMaster: %s",
      this._stream, this._fromEventNumber, this._maxCount, this._resolveLinkTos, this._requireMaster);
};

module.exports = ReadStreamEventsForwardOperation;

/***/ }),
/* 52 */
/***/ (function(module, exports) {

const ReadDirection = Object.freeze({
  Forward: 'forward',
  Backward: 'backward'
});

module.exports = ReadDirection;

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var ClientMessage = __webpack_require__(35);
var SliceReadStatus = __webpack_require__(54);

exports.convert = function(code) {
  switch(code) {
    case ClientMessage.ReadStreamEventsCompleted.ReadStreamResult.Success:
      return SliceReadStatus.Success;
    case ClientMessage.ReadStreamEventsCompleted.ReadStreamResult.NoStream:
      return SliceReadStatus.StreamNotFound;
    case ClientMessage.ReadStreamEventsCompleted.ReadStreamResult.StreamDeleted:
      return SliceReadStatus.StreamDeleted;
    default:
      throw new Error('Invalid code: ' + code)
  }
};

/***/ }),
/* 54 */
/***/ (function(module, exports) {

const SliceReadStatus = Object.freeze({
  Success: 'success',
  StreamNotFound: 'streamNotFound',
  StreamDeleted: 'streamDeleted'
});

module.exports = SliceReadStatus;

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var util = __webpack_require__(12);

var TcpCommand = __webpack_require__(26);
var ClientMessage = __webpack_require__(35);
var ReadDirection = __webpack_require__(52);
var StatusCode = __webpack_require__(53);
var InspectionResult = __webpack_require__(34);
var InspectionDecision = __webpack_require__(33);
var results = __webpack_require__(2);
var AccessDeniedError = __webpack_require__(43);

var OperationBase = __webpack_require__(44);

function ReadStreamEventsBackwardOperation(
    log, cb, stream, fromEventNumber, maxCount, resolveLinkTos, requireMaster, userCredentials
) {
  OperationBase.call(this, log, cb, TcpCommand.ReadStreamEventsBackward, TcpCommand.ReadStreamEventsBackwardCompleted, userCredentials);
  this._responseType = ClientMessage.ReadStreamEventsCompleted;

  this._stream = stream;
  this._fromEventNumber = fromEventNumber;
  this._maxCount = maxCount;
  this._resolveLinkTos = resolveLinkTos;
  this._requireMaster = requireMaster;
}
util.inherits(ReadStreamEventsBackwardOperation, OperationBase);

ReadStreamEventsBackwardOperation.prototype._createRequestDto = function() {
  return new ClientMessage.ReadStreamEvents({
      eventStreamId: this._stream,
      fromEventNumber: this._fromEventNumber,
      maxCount: this._maxCount,
      resolveLinkTos: this._resolveLinkTos,
      requireMaster: this._requireMaster
  });
};

ReadStreamEventsBackwardOperation.prototype._inspectResponse = function(response) {
  switch (response.result)
  {
    case ClientMessage.ReadStreamEventsCompleted.ReadStreamResult.Success:
      this._succeed();
      return new InspectionResult(InspectionDecision.EndOperation, "Success");
    case ClientMessage.ReadStreamEventsCompleted.ReadStreamResult.StreamDeleted:
      this._succeed();
      return new InspectionResult(InspectionDecision.EndOperation, "StreamDeleted");
    case ClientMessage.ReadStreamEventsCompleted.ReadStreamResult.NoStream:
      this._succeed();
      return new InspectionResult(InspectionDecision.EndOperation, "NoStream");
    case ClientMessage.ReadStreamEventsCompleted.ReadStreamResult.Error:
      this.fail(new Error("Server error: " + response.error));
      return new InspectionResult(InspectionDecision.EndOperation, "Error");
    case ClientMessage.ReadStreamEventsCompleted.ReadStreamResult.AccessDenied:
      this.fail(new AccessDeniedError("Read", this._stream));
      return new InspectionResult(InspectionDecision.EndOperation, "AccessDenied");
    default:
      throw new Error(util.format("Unexpected ReadStreamResult: %s.", response.result));
  }
};

ReadStreamEventsBackwardOperation.prototype._transformResponse = function(response) {
  return new results.StreamEventsSlice(
      StatusCode.convert(response.result),
      this._stream,
      this._fromEventNumber,
      ReadDirection.Backward,
      response.events,
      response.nextEventNumber,
      response.lastEventNumber,
      response.isEndOfStream
  )
};

ReadStreamEventsBackwardOperation.prototype.toString = function() {
  return util.format("Stream: %s, FromEventNumber: %d, MaxCount: %d, ResolveLinkTos: %s, RequireMaster: %s",
      this._stream, this._fromEventNumber, this._maxCount, this._resolveLinkTos, this._requireMaster);
};

module.exports = ReadStreamEventsBackwardOperation;

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var util = __webpack_require__(12);

var TcpCommand = __webpack_require__(26);
var ClientMessage = __webpack_require__(35);
var ReadDirection = __webpack_require__(52);
var InspectionResult = __webpack_require__(34);
var InspectionDecision = __webpack_require__(33);
var results = __webpack_require__(2);
var AccessDeniedError = __webpack_require__(43);

var OperationBase = __webpack_require__(44);

function ReadAllEventsForwardOperation(
    log, cb, position, maxCount, resolveLinkTos, requireMaster, userCredentials
) {
  OperationBase.call(this, log, cb, TcpCommand.ReadAllEventsForward, TcpCommand.ReadAllEventsForwardCompleted, userCredentials);
  this._responseType = ClientMessage.ReadAllEventsCompleted;

  this._position = position;
  this._maxCount = maxCount;
  this._resolveLinkTos = resolveLinkTos;
  this._requireMaster = requireMaster;
}
util.inherits(ReadAllEventsForwardOperation, OperationBase);

ReadAllEventsForwardOperation.prototype._createRequestDto = function() {
  return new ClientMessage.ReadAllEvents({
      commitPosition: this._position.commitPosition,
      preparePosition: this._position.preparePosition,
      maxCount: this._maxCount,
      resolveLinkTos: this._resolveLinkTos,
      requireMaster: this._requireMaster
  });
};

ReadAllEventsForwardOperation.prototype._inspectResponse = function(response) {
  switch (response.result)
  {
    case ClientMessage.ReadAllEventsCompleted.ReadAllResult.Success:
      this._succeed();
      return new InspectionResult(InspectionDecision.EndOperation, "Success");
    case ClientMessage.ReadAllEventsCompleted.ReadAllResult.Error:
      this.fail(new Error("Server error: " + response.error));
      return new InspectionResult(InspectionDecision.EndOperation, "Error");
    case ClientMessage.ReadAllEventsCompleted.ReadAllResult.AccessDenied:
      this.fail(new AccessDeniedError("Read", "$all"));
      return new InspectionResult(InspectionDecision.EndOperation, "AccessDenied");
    default:
      throw new Error(util.format("Unexpected ReadStreamResult: %s.", response.result));
  }
};

ReadAllEventsForwardOperation.prototype._transformResponse = function(response) {
  return new results.AllEventsSlice(
      ReadDirection.Forward,
      new results.Position(response.commitPosition, response.preparePosition),
      new results.Position(response.nextCommitPosition, response.nextPreparePosition),
      response.events
  )
};

ReadAllEventsForwardOperation.prototype.toString = function() {
  return util.format("Position: %j, MaxCount: %d, ResolveLinkTos: %s, RequireMaster: %s",
      this._position, this._maxCount, this._resolveLinkTos, this._requireMaster);
};

module.exports = ReadAllEventsForwardOperation;

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

var util = __webpack_require__(12);

var TcpCommand = __webpack_require__(26);
var ClientMessage = __webpack_require__(35);
var ReadDirection = __webpack_require__(52);
var InspectionResult = __webpack_require__(34);
var InspectionDecision = __webpack_require__(33);
var results = __webpack_require__(2);
var AccessDeniedError = __webpack_require__(43);

var OperationBase = __webpack_require__(44);

function ReadAllEventsBackwardOperation(
    log, cb, position, maxCount, resolveLinkTos, requireMaster, userCredentials
) {
  OperationBase.call(this, log, cb, TcpCommand.ReadAllEventsBackward, TcpCommand.ReadAllEventsBackwardCompleted, userCredentials);
  this._responseType = ClientMessage.ReadAllEventsCompleted;

  this._position = position;
  this._maxCount = maxCount;
  this._resolveLinkTos = resolveLinkTos;
  this._requireMaster = requireMaster;
}
util.inherits(ReadAllEventsBackwardOperation, OperationBase);

ReadAllEventsBackwardOperation.prototype._createRequestDto = function() {
  return new ClientMessage.ReadAllEvents({
    commitPosition: this._position.commitPosition,
    preparePosition: this._position.preparePosition,
    maxCount: this._maxCount,
    resolveLinkTos: this._resolveLinkTos,
    requireMaster: this._requireMaster
  });
};

ReadAllEventsBackwardOperation.prototype._inspectResponse = function(response) {
  switch (response.result)
  {
    case ClientMessage.ReadAllEventsCompleted.ReadAllResult.Success:
      this._succeed();
      return new InspectionResult(InspectionDecision.EndOperation, "Success");
    case ClientMessage.ReadAllEventsCompleted.ReadAllResult.Error:
      this.fail(new Error("Server error: " + response.error));
      return new InspectionResult(InspectionDecision.EndOperation, "Error");
    case ClientMessage.ReadAllEventsCompleted.ReadAllResult.AccessDenied:
      this.fail(new AccessDeniedError("Read", "$all"));
      return new InspectionResult(InspectionDecision.EndOperation, "AccessDenied");
    default:
      throw new Error(util.format("Unexpected ReadStreamResult: %s.", response.result));
  }
};

ReadAllEventsBackwardOperation.prototype._transformResponse = function(response) {
  return new results.AllEventsSlice(
      ReadDirection.Backward,
      new results.Position(response.commitPosition, response.preparePosition),
      new results.Position(response.nextCommitPosition, response.nextPreparePosition),
      response.events
  )
};

ReadAllEventsBackwardOperation.prototype.toString = function() {
  return util.format("Position: %j, MaxCount: %d, ResolveLinkTos: %s, RequireMaster: %s",
      this._position, this._maxCount, this._resolveLinkTos, this._requireMaster);
};

module.exports = ReadAllEventsBackwardOperation;

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var util = __webpack_require__(12);

var ensure = __webpack_require__(5);
var OperationBase = __webpack_require__(44);
var TcpCommand = __webpack_require__(26);
var ClientMessage = __webpack_require__(35);
var SystemConsumerStrategies = __webpack_require__(8);
var InspectionDecision = __webpack_require__(33);
var InspectionResult = __webpack_require__(34);
var results = __webpack_require__(2);


function CreatePersistentSubscriptionOperation(log, cb, stream, groupName, settings, userCredentials) {
  OperationBase.call(this, log, cb, TcpCommand.CreatePersistentSubscription, TcpCommand.CreatePersistentSubscriptionCompleted, userCredentials);

  ensure.notNull(settings, "settings");
  this._resolveLinkTos = settings.resolveLinkTos;
  this._stream = stream;
  this._groupName = groupName;
  this._startFromBeginning = settings.startFrom;
  this._maxRetryCount = settings.maxRetryCount;
  this._liveBufferSize = settings.liveBufferSize;
  this._readBatchSize = settings.readBatchSize;
  this._bufferSize = settings.historyBufferSize;
  this._recordStatistics = settings.extraStatistics;
  this._messageTimeoutMilliseconds = settings.messageTimeout;
  this._checkPointAfter = settings.checkPointAfter;
  this._minCheckPointCount = settings.minCheckPointCount;
  this._maxCheckPointCount = settings.maxCheckPointCount;
  this._maxSubscriberCount = settings.maxSubscriberCount;
  this._namedConsumerStrategy = settings.namedConsumerStrategy;

  this._responseType = ClientMessage.CreatePersistentSubscriptionCompleted;
}
util.inherits(CreatePersistentSubscriptionOperation, OperationBase);

CreatePersistentSubscriptionOperation.prototype._createRequestDto = function() {
  return new ClientMessage.CreatePersistentSubscription({
      subscriptionGroupName: this._groupName,
      eventStreamId: this._stream,
      resolveLinkTos: this._resolveLinkTos,
      startFrom: this._startFromBeginning,
      messageTimeoutMilliseconds: this._messageTimeoutMilliseconds,
      recordStatistics: this._recordStatistics,
      liveBufferSize: this._liveBufferSize,
      readBatchSize: this._readBatchSize,
      bufferSize: this._bufferSize,
      maxRetryCount: this._maxRetryCount,
      preferRoundRobin: this._namedConsumerStrategy === SystemConsumerStrategies.RoundRobin,
      checkpointAfterTime: this._checkPointAfter,
      checkpointMaxCount: this._maxCheckPointCount,
      checkpointMinCount: this._minCheckPointCount,
      subscriberMaxCount: this._maxSubscriberCount,
      namedConsumerStrategy: this._namedConsumerStrategy
  });
};

CreatePersistentSubscriptionOperation.prototype._inspectResponse = function(response) {
  switch (response.result)
  {
    case ClientMessage.CreatePersistentSubscriptionCompleted.CreatePersistentSubscriptionResult.Success:
      this._succeed();
      return new InspectionResult(InspectionDecision.EndOperation, "Success");
    case ClientMessage.CreatePersistentSubscriptionCompleted.CreatePersistentSubscriptionResult.Fail:
      this.fail(new Error(util.format("Subscription group %s on stream %s failed '%s'", this._groupName, this._stream, response.reason)));
      return new InspectionResult(InspectionDecision.EndOperation, "Fail");
    case ClientMessage.CreatePersistentSubscriptionCompleted.CreatePersistentSubscriptionResult.AccessDenied:
      this.fail(new Error(util.format("Write access denied for stream '%s'.", this._stream)));
      return new InspectionResult(InspectionDecision.EndOperation, "AccessDenied");
    case ClientMessage.CreatePersistentSubscriptionCompleted.CreatePersistentSubscriptionResult.AlreadyExists:
      this.fail(new Error(util.format("Subscription group %s on stream %s already exists", this._groupName, this._stream)));
      return new InspectionResult(InspectionDecision.EndOperation, "AlreadyExists");
    default:
      throw new Error(util.format("Unexpected OperationResult: %s.", response.result));
  }
};

CreatePersistentSubscriptionOperation.prototype._transformResponse = function(response) {
  return new results.PersistentSubscriptionCreateResult(results.PersistentSubscriptionCreateStatus.Success);
};

CreatePersistentSubscriptionOperation.prototype.toString = function() {
  return util.format("Stream: %s, Group Name: %s", this._stream, this._groupName);
};

module.exports = CreatePersistentSubscriptionOperation;

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

var util = __webpack_require__(12);

var ensure = __webpack_require__(5);
var OperationBase = __webpack_require__(44);
var TcpCommand = __webpack_require__(26);
var ClientMessage = __webpack_require__(35);
var SystemConsumerStrategies = __webpack_require__(8);
var InspectionDecision = __webpack_require__(33);
var InspectionResult = __webpack_require__(34);
var results = __webpack_require__(2);


function UpdatePersistentSubscriptionOperation(log, cb, stream, groupName, settings, userCredentials) {
  OperationBase.call(this, log, cb, TcpCommand.UpdatePersistentSubscription, TcpCommand.UpdatePersistentSubscriptionCompleted, userCredentials);

  ensure.notNull(settings, "settings");
  this._resolveLinkTos = settings.resolveLinkTos;
  this._stream = stream;
  this._groupName = groupName;
  this._startFromBeginning = settings.startFrom;
  this._maxRetryCount = settings.maxRetryCount;
  this._liveBufferSize = settings.liveBufferSize;
  this._readBatchSize = settings.readBatchSize;
  this._bufferSize = settings.historyBufferSize;
  this._recordStatistics = settings.extraStatistics;
  this._messageTimeoutMilliseconds = settings.messageTimeout;
  this._checkPointAfter = settings.checkPointAfter;
  this._minCheckPointCount = settings.minCheckPointCount;
  this._maxCheckPointCount = settings.maxCheckPointCount;
  this._maxSubscriberCount = settings.maxSubscriberCount;
  this._namedConsumerStrategy = settings.namedConsumerStrategy;

  this._responseType = ClientMessage.UpdatePersistentSubscriptionCompleted;
}
util.inherits(UpdatePersistentSubscriptionOperation, OperationBase);

UpdatePersistentSubscriptionOperation.prototype._createRequestDto = function() {
  return new ClientMessage.UpdatePersistentSubscription({
      subscriptionGroupName: this._groupName,
      eventStreamId: this._stream,
      resolveLinkTos: this._resolveLinkTos,
      startFrom: this._startFromBeginning,
      messageTimeoutMilliseconds: this._messageTimeoutMilliseconds,
      recordStatistics: this._recordStatistics,
      liveBufferSize: this._liveBufferSize,
      readBatchSize: this._readBatchSize,
      bufferSize: this._bufferSize,
      maxRetryCount: this._maxRetryCount,
      preferRoundRobin: this._namedConsumerStrategy === SystemConsumerStrategies.RoundRobin,
      checkpointAfterTime: this._checkPointAfter,
      checkpointMaxCount: this._maxCheckPointCount,
      checkpointMinCount: this._minCheckPointCount,
      subscriberMaxCount: this._maxSubscriberCount,
      namedConsumerStrategy: this._namedConsumerStrategy
  });
};

UpdatePersistentSubscriptionOperation.prototype._inspectResponse = function(response) {
  switch (response.result)
  {
    case ClientMessage.UpdatePersistentSubscriptionCompleted.UpdatePersistentSubscriptionResult.Success:
      this._succeed();
      return new InspectionResult(InspectionDecision.EndOperation, "Success");
    case ClientMessage.UpdatePersistentSubscriptionCompleted.UpdatePersistentSubscriptionResult.Fail:
      this.fail(new Error(util.format("Subscription group %s on stream %s failed '%s'", this._groupName, this._stream, response.reason)));
      return new InspectionResult(InspectionDecision.EndOperation, "Fail");
    case ClientMessage.UpdatePersistentSubscriptionCompleted.UpdatePersistentSubscriptionResult.AccessDenied:
      this.fail(new Error(util.format("Write access denied for stream '%s'.", this._stream)));
      return new InspectionResult(InspectionDecision.EndOperation, "AccessDenied");
    case ClientMessage.UpdatePersistentSubscriptionCompleted.UpdatePersistentSubscriptionResult.DoesNotExist:
      this.fail(new Error(util.format("Subscription group %s on stream %s does not exist", this._groupName, this._stream)));
      return new InspectionResult(InspectionDecision.EndOperation, "DoesNotExist");
    default:
      throw new Error(util.format("Unexpected OperationResult: %s.", response.result));
  }
};

UpdatePersistentSubscriptionOperation.prototype._transformResponse = function(response) {
  return new results.PersistentSubscriptionUpdateResult(results.PersistentSubscriptionUpdateStatus.Success);
};

UpdatePersistentSubscriptionOperation.prototype.toString = function() {
  return util.format("Stream: %s, Group Name: %s", this._stream, this._groupName);
};

module.exports = UpdatePersistentSubscriptionOperation;

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

var util = __webpack_require__(12);

var OperationBase = __webpack_require__(44);
var TcpCommand = __webpack_require__(26);
var ClientMessage = __webpack_require__(35);
var InspectionDecision = __webpack_require__(33);
var InspectionResult = __webpack_require__(34);
var results = __webpack_require__(2);


function DeletePersistentSubscriptionOperation(log, cb, stream, groupName, userCredentials) {
  OperationBase.call(this, log, cb, TcpCommand.DeletePersistentSubscription, TcpCommand.DeletePersistentSubscriptionCompleted, userCredentials);

  this._stream = stream;
  this._groupName = groupName;

  this._responseType = ClientMessage.DeletePersistentSubscriptionCompleted;
}
util.inherits(DeletePersistentSubscriptionOperation, OperationBase);

DeletePersistentSubscriptionOperation.prototype._createRequestDto = function() {
  return new ClientMessage.DeletePersistentSubscription({
      subscriptionGroupName: this._groupName,
      eventStreamId: this._stream
  });
};

DeletePersistentSubscriptionOperation.prototype._inspectResponse = function(response) {
  switch (response.result)
  {
    case ClientMessage.DeletePersistentSubscriptionCompleted.DeletePersistentSubscriptionResult.Success:
      this._succeed();
      return new InspectionResult(InspectionDecision.EndOperation, "Success");
    case ClientMessage.DeletePersistentSubscriptionCompleted.DeletePersistentSubscriptionResult.Fail:
      this.fail(new Error(util.format("Subscription group %s on stream %s failed '%s'", this._groupName, this._stream, response.reason)));
      return new InspectionResult(InspectionDecision.EndOperation, "Fail");
    case ClientMessage.DeletePersistentSubscriptionCompleted.DeletePersistentSubscriptionResult.AccessDenied:
      this.fail(new Error(util.format("Write access denied for stream '%s'.", this._stream)));
      return new InspectionResult(InspectionDecision.EndOperation, "AccessDenied");
    case ClientMessage.DeletePersistentSubscriptionCompleted.DeletePersistentSubscriptionResult.DoesNotExist:
      this.fail(new Error(util.format("Subscription group %s on stream %s does not exist", this._groupName, this._stream)));
      return new InspectionResult(InspectionDecision.EndOperation, "DoesNotExist");
    default:
      throw new Error(util.format("Unexpected OperationResult: %s.", response.result));
  }
};

DeletePersistentSubscriptionOperation.prototype._transformResponse = function(response) {
  return new results.PersistentSubscriptionDeleteResult(results.PersistentSubscriptionDeleteStatus.Success);
};

DeletePersistentSubscriptionOperation.prototype.toString = function() {
  return util.format("Stream: %s, Group Name: %s", this._stream, this._groupName);
};

module.exports = DeletePersistentSubscriptionOperation;

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

var util = __webpack_require__(12);
var Long = __webpack_require__(4);

var EventStoreCatchUpSubscription = __webpack_require__(62);
var SliceReadStatus = __webpack_require__(54);

function EventStoreStreamCatchUpSubscription(
    connection, log, streamId, fromEventNumberExclusive, resolveLinkTos, userCredentials,
    eventAppeared, liveProcessingStarted, subscriptionDropped,
    verboseLogging, readBatchSize
){
  EventStoreCatchUpSubscription.call(this, connection, log, streamId, resolveLinkTos, userCredentials,
                                           eventAppeared, liveProcessingStarted, subscriptionDropped,
                                           verboseLogging, readBatchSize);

  //Ensure.NotNullOrEmpty(streamId, "streamId");

  this._lastProcessedEventNumber = fromEventNumberExclusive === null ? Long.fromNumber(-1) : fromEventNumberExclusive;
  this._nextReadEventNumber = fromEventNumberExclusive === null ? Long.fromNumber(0) : fromEventNumberExclusive.add(1);
}
util.inherits(EventStoreStreamCatchUpSubscription, EventStoreCatchUpSubscription);

function delay(ms, result) {
  return new Promise(function (resolve, reject) {
    setTimeout(resolve, ms, result);
  })
}

EventStoreStreamCatchUpSubscription.prototype._readEventsTill = function(
    connection, resolveLinkTos, userCredentials, lastCommitPosition, lastEventNumber
) {
  var self = this;

  function processEvents(events, index) {
    if (index >= events.length) return Promise.resolve();

    return self._tryProcess(events[index])
        .then(function() {
          return processEvents(events, index + 1);
        });
  }

  function readNext() {
    return connection.readStreamEventsForward(self.streamId, self._nextReadEventNumber, self.readBatchSize, resolveLinkTos, userCredentials)
        .then(function(slice) {
          switch(slice.status) {
            case SliceReadStatus.Success:
              return processEvents(slice.events, 0)
                  .then(function() {
                    self._nextReadEventNumber = slice.nextEventNumber;
                    var done = Promise.resolve(lastEventNumber === null ? slice.isEndOfStream : slice.nextEventNumber.compare(lastEventNumber) > 0);
                    if (!done && slice.isEndOfStream) return delay(100, false);
                    return done;
                  });
            case SliceReadStatus.StreamNotFound:
              if (lastEventNumber && lastEventNumber.compare(-1) !== 0) {
                throw new Error(util.format("Impossible: stream %s disappeared in the middle of catching up subscription.", self.streamId));
              }
              return true;
            case SliceReadStatus.StreamDeleted:
              throw new Error("Stream deleted: " + self.streamId);
            default:
              throw new Error(util.format("Unexpected StreamEventsSlice.Status: %s.", slice.status));
          }
        })
        .then(function(done) {
          if (done || self._shouldStop)
              return;
          return readNext();
        })
  }
  return readNext()
      .then(function() {
        if (self._verbose) {
          self._log.debug("Catch-up Subscription to %s: finished reading events, nextReadEventNumber = %d.",
            self.isSubscribedToAll ? '<all>' : self.streamId, self._nextReadEventNumber);
        }
      });
};

EventStoreStreamCatchUpSubscription.prototype._tryProcess = function(e) {
  var processed = false;
  var promise;
  if (e.originalEventNumber.compare(this._lastProcessedEventNumber) > 0) {
    promise = this._eventAppeared(this, e);
    this._lastProcessedEventNumber = e.originalEventNumber;
    processed = true;
  }
  if (this._verbose) {
    this._log.debug("Catch-up Subscription to %s: %s event (%s, %d, %s @ %d).",
      this.isSubscribedToAll ? '<all>' : this.streamId, processed ? "processed" : "skipping",
      e.originalEvent.eventStreamId, e.originalEvent.eventNumber, e.originalEvent.eventType, e.originalEventNumber);
  }
  return (promise && promise.then) ? promise : Promise.resolve();
};


module.exports = EventStoreStreamCatchUpSubscription;

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

var util = __webpack_require__(12);

var SubscriptionDropReason = __webpack_require__(30);

const DefaultReadBatchSize = 500;
const DefaultMaxPushQueueSize = 10000;
const MaxReadSize = 4096;

function DropSubscriptionEvent() {}

/**
 * @param connection
 * @param log
 * @param streamId
 * @param resolveLinkTos
 * @param userCredentials
 * @param eventAppeared
 * @param liveProcessingStarted
 * @param subscriptionDropped
 * @param verboseLogging
 * @param readBatchSize
 * @param maxPushQueueSize
 * @constructor
 * @property {boolean} isSubscribedToAll
 * @property {string} streamId
 * @property {number} readBatchSize
 * @property {number} maxPushQueueSize
 */
function EventStoreCatchUpSubscription(
    connection, log, streamId, resolveLinkTos, userCredentials,
    eventAppeared, liveProcessingStarted, subscriptionDropped,
    verboseLogging, readBatchSize, maxPushQueueSize
) {
  readBatchSize = readBatchSize || DefaultReadBatchSize;
  maxPushQueueSize = maxPushQueueSize || DefaultMaxPushQueueSize;
  //Ensure.NotNull(connection, "connection");
  //Ensure.NotNull(log, "log");
  //Ensure.NotNull(eventAppeared, "eventAppeared");
  //Ensure.Positive(readBatchSize, "readBatchSize");
  //Ensure.Positive(maxPushQueueSize, "maxPushQueueSize");
  if (readBatchSize > MaxReadSize) throw new Error(util.format("Read batch size should be less than %d. For larger reads you should page.", MaxReadSize));

  this._connection = connection;
  this._log = log;
  this._streamId = streamId || '';
  this._resolveLinkTos = resolveLinkTos;
  this._userCredentials = userCredentials;
  this._shouldStop = false;
  this._stopped = false;
  this._isDropped = false;
  this._subscription = null;
  this._liveQueue = [];
  this._dropData = null;
  this._isProcessing = false;

  Object.defineProperties(this, {
    isSubscribedToAll: { value: this._streamId === '' },
    streamId: { value: this._streamId },
    readBatchSize: { value: readBatchSize },
    maxPushQueueSize: { value: maxPushQueueSize }
  });

  this._eventAppeared = eventAppeared;
  this._liveProcessingStarted = liveProcessingStarted;
  this._subscriptionDropped = subscriptionDropped;
  this._verbose = verboseLogging;

  var self = this;
  this._onReconnect = function() {
    if (self._verbose) self._log.debug("Catch-up Subscription to %s: unhooking from connection.Connected.", self._streamId || '<all>');
    self._connection.removeListener('connected', self._onReconnect);
    if (self._verbose) self._log.debug("Catch-up Subscription to %s: recovering after reconnection.", self._streamId || '<all>');
    self._runSubscription();
  }
}

/**
 * @param {EventStoreNodeConnection} connection
 * @param {boolean} resolveLinkTos
 * @param {UserCredentials} userCredentials
 * @param {?number} lastCommitPosition
 * @param {?number} lastEventNumber
 * @private
 * @abstract
 */
EventStoreCatchUpSubscription.prototype._readEventsTill = function(
    connection, resolveLinkTos, userCredentials, lastCommitPosition, lastEventNumber
) {
  throw new Error("EventStoreCatchUpSubscription._readEventsTill abstract method called. " + this.constructor.name);
};

/**
 * @param {ResolvedEvent} e
 * @private
 * @abstract
 */
EventStoreCatchUpSubscription.prototype._tryProcess = function(e) {
  throw new Error("EventStoreCatchUpSubscription._tryProcess abstract method called. " + this.constructor.name);
};

EventStoreCatchUpSubscription.prototype.start = function() {
  if (this._verbose) this._log.debug("Catch-up Subscription to %s: starting...", this._streamId || '<all>');
  this._runSubscription();
};

EventStoreCatchUpSubscription.prototype.stop = function() {
  if (this._verbose) this._log.debug("Catch-up Subscription to %s: requesting stop...", this._streamId || '<all>');

  if (this._verbose) this._log.debug("Catch-up Subscription to %s: unhooking from connection.Connected.", this._streamId || '<all>');
  this._connection.removeListener('connected', this._onReconnect);

  this._shouldStop = true;
  this._enqueueSubscriptionDropNotification(SubscriptionDropReason.UserInitiated, null);
/*
  if (timeout) {
    if (this._verbose) this._log.debug("Waiting on subscription to stop");
    if (!this._stopped.Wait(timeout))
      throw new TimeoutException(string.Format("Could not stop {0} in time.", GetType().Name));
  }
  */
};

EventStoreCatchUpSubscription.prototype._runSubscription = function() {
  var logStreamName = this._streamId || '<all>';

  if (this._verbose) this._log.debug("Catch-up Subscription to %s: running...", logStreamName);

  var self = this;
  this._stopped = false;
  this._isDropped = false;
  this._dropData = null;
  if (this._verbose) this._log.debug("Catch-up Subscription to %s: pulling events...", logStreamName);
  this._readEventsTill(this._connection, this._resolveLinkTos, this._userCredentials, null, null)
      .then(function() {
        if (self._shouldStop) return;
        if (self._verbose) self._log.debug("Catch-up Subscription to %s: subscribing...", logStreamName);
        if (self._streamId === '') {
          return self._connection.subscribeToAll(self._resolveLinkTos, self._enqueuePushedEvent.bind(self), self._serverSubscriptionDropped.bind(self), self._userCredentials);
        } else {
          return self._connection.subscribeToStream(self._streamId, self._resolveLinkTos, self._enqueuePushedEvent.bind(self), self._serverSubscriptionDropped.bind(self), self._userCredentials);
        }
      })
      .then(function(subscription) {
        if (subscription === undefined) return;
        if (self._verbose) self._log.debug("Catch-up Subscription to %s: pulling events (if left)...", logStreamName);
        self._subscription = subscription;
        return self._readEventsTill(self._connection, self._resolveLinkTos, self._userCredentials, subscription.lastCommitPosition, subscription.lastEventNumber)
      })
      .catch(function(err) {
        self._dropSubscription(SubscriptionDropReason.CatchUpError, err);
        return true;
      })
      .then(function(faulted) {
        if (faulted) return;
        if (self._shouldStop) {
          self._dropSubscription(SubscriptionDropReason.UserInitiated, null);
          return;
        }
        if (self._verbose) self._log.debug("Catch-up Subscription to %s: processing live events...", logStreamName);
        if (self._liveProcessingStarted) {
          try {
            self._liveProcessingStarted(self);
          } catch (e) {
            self._log.error(e, "Catch-up Subscription to %s: liveProcessingStarted callback failed.", logStreamName);
          }
        }
        if (self._verbose) self._log.debug("Catch-up Subscription to %s: hooking to connection.Connected", logStreamName);
        self._connection.on('connected', self._onReconnect);
        self._allowProcessing = true;
        self._ensureProcessingPushQueue();
      });
};

EventStoreCatchUpSubscription.prototype._enqueuePushedEvent = function(subscription, e) {
  if (this._verbose) {
    this._log.debug("Catch-up Subscription to %s: event appeared (%s, %d, %s @ %s).",
      this._streamId || '<all>',
      e.originalStreamId, e.originalEventNumber, e.originalEvent.eventType, e.originalPosition);
  }

  if (this._liveQueue.length >= this.maxPushQueueSize)
  {
    this._enqueueSubscriptionDropNotification(SubscriptionDropReason.ProcessingQueueOverflow, null);
    subscription.unsubscribe();
    return;
  }

  this._liveQueue.push(e);

  if (this._allowProcessing) this._ensureProcessingPushQueue();
};

EventStoreCatchUpSubscription.prototype._serverSubscriptionDropped = function(subscription, reason, err) {
  this._enqueueSubscriptionDropNotification(reason, err);
};

EventStoreCatchUpSubscription.prototype._enqueueSubscriptionDropNotification = function(reason, error) {
  // if drop data was already set -- no need to enqueue drop again, somebody did that already
  if (this._dropData) return;
  this._dropData = {reason: reason, error: error};
  this._liveQueue.push(new DropSubscriptionEvent());
  if (this._allowProcessing) this._ensureProcessingPushQueue();
};

EventStoreCatchUpSubscription.prototype._ensureProcessingPushQueue = function() {
  if (this._isProcessing) return;

  this._isProcessing = true;
  setImmediate(this._processLiveQueue.bind(this));
};

EventStoreCatchUpSubscription.prototype._processLiveQueue = function() {
  var ev = this._liveQueue.shift();
  if (!ev) {
    this._isProcessing = false;
    return;
  }
  if (ev instanceof DropSubscriptionEvent) {
    if (!this._dropData) this._dropData = {reason: SubscriptionDropReason.Unknown, error: new Error("Drop reason not specified.")};
    this._dropSubscription(this._dropData.reason, this._dropData.error);
    this._isProcessing = false;
    return;
  }
  var promise;
  try {
    promise = this._tryProcess(ev);
  }
  catch(err) {
    this._dropSubscription(SubscriptionDropReason.EventHandlerException, err);
    this._isProcessing = false;
    return;
  }
  if (promise && promise.then) {
    var self = this;
    promise
      .then(this._processLiveQueue.bind(this), function(err) {
        self._dropSubscription(SubscriptionDropReason.EventHandlerException, err);
        self._isProcessing = false;
      });
  } else {
    setImmediate(this._processLiveQueue.bind(this));
  }
};

EventStoreCatchUpSubscription.prototype._dropSubscription = function(reason, error) {
  if (this._isDropped) return;

  this._isDropped = true;
  if (this._verbose) {
    this._log.debug("Catch-up Subscription to %s: dropping subscription, reason: %s %s.",
      this._streamId || '<all>', reason, error);
  }

  if (this._subscription) this._subscription.unsubscribe();
  if (this._subscriptionDropped) {
    try {
      this._subscriptionDropped(this, reason, error);
    } catch (e) {
      this._log.error(e, "Catch-up Subscription to %s: subscriptionDropped callback failed.", this._streamId || '<all>');
    }
  }
  this._stopped = true;
};

module.exports = EventStoreCatchUpSubscription;

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

var util = __webpack_require__(12);

var EventStoreCatchUpSubscription = __webpack_require__(62);
var results = __webpack_require__(2);


function EventStoreAllCatchUpSubscription(
    connection, log, fromPositionExclusive, resolveLinkTos, userCredentials,
    eventAppeared, liveProcessingStarted, subscriptionDropped,
    verboseLogging, readBatchSize
) {
  EventStoreCatchUpSubscription.call(this, connection, log, '', resolveLinkTos, userCredentials,
      eventAppeared, liveProcessingStarted, subscriptionDropped,
      verboseLogging, readBatchSize);

  this._lastProcessedPosition = fromPositionExclusive || new results.Position(-1,-1);
  this._nextReadPosition = fromPositionExclusive || new results.Position(0,0);
}
util.inherits(EventStoreAllCatchUpSubscription, EventStoreCatchUpSubscription);

EventStoreAllCatchUpSubscription.prototype._readEventsTill = function(
    connection, resolveLinkTos, userCredentials, lastCommitPosition, lastEventNumber
) {
  var self = this;

  function processEvents(events, index) {
    if (index >= events.length) return Promise.resolve();
    if (events[index].originalPosition === null) throw new Error("Subscription event came up with no OriginalPosition.");

    return self._tryProcess(events[index])
        .then(function() {
          return processEvents(events, index + 1);
        });
  }

  function readNext() {
    return connection.readAllEventsForward(self._nextReadPosition, self.readBatchSize, resolveLinkTos, userCredentials)
        .then(function(slice) {
          return processEvents(slice.events, 0)
              .then(function() {
                self._nextReadPosition = slice.nextPosition;
                return (lastCommitPosition === null)
                    ? slice.isEndOfStream
                    : slice.nextPosition.compareTo(new results.Position(lastCommitPosition, lastCommitPosition)) >= 0;
              });
        })
        .then(function(done) {
          if (done || self._shouldStop) return;
          return readNext();
        });
  }

  return readNext()
      .then(function() {
        if (self._verbose)
          self._log.debug("Catch-up Subscription to %s: finished reading events, nextReadPosition = %s.",
              self.isSubscribedToAll ? "<all>" : self.streamId, self._nextReadPosition);
      });
};


EventStoreAllCatchUpSubscription.prototype._tryProcess = function(e) {
  var processed = false;
  var promise;
  if (e.originalPosition.compareTo(this._lastProcessedPosition) > 0)
  {
    promise = this._eventAppeared(this, e);
    this._lastProcessedPosition = e.originalPosition;
    processed = true;
  }
  if (this._verbose) {
    this._log.debug("Catch-up Subscription to %s: %s event (%s, %d, %s @ %s).",
      this.streamId || '<all>', processed ? "processed" : "skipping",
      e.originalEvent.eventStreamId, e.originalEvent.eventNumber, e.originalEvent.eventType, e.originalPosition);
  }
  return (promise && promise.then) ? promise : Promise.resolve();
};

module.exports = EventStoreAllCatchUpSubscription;


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

var util = __webpack_require__(12);

var EventStorePersistentSubscriptionBase = __webpack_require__(65);
var messages = __webpack_require__(15);

function EventStorePersistentSubscription(
    subscriptionId, streamId, eventAppeared, subscriptionDropped, userCredentials, log, verboseLogging, settings,
    handler, bufferSize, autoAck
) {
  bufferSize = bufferSize === undefined ? 10 : bufferSize;
  autoAck = autoAck === undefined ? true : !!autoAck;

  EventStorePersistentSubscriptionBase.call(this, subscriptionId, streamId, eventAppeared, subscriptionDropped,
                                            userCredentials, log, verboseLogging, settings, bufferSize, autoAck);

  this._handler = handler;
}
util.inherits(EventStorePersistentSubscription, EventStorePersistentSubscriptionBase);

EventStorePersistentSubscription.prototype._startSubscription = function(
    subscriptionId, streamId, bufferSize, userCredentials, onEventAppeared, onSubscriptionDropped, settings
) {
  var self = this;
  return new Promise(function(resolve, reject){
    function cb(err, result) {
      if (err) return reject(err);
      resolve(result);
    }
    self._handler.enqueueMessage(new messages.StartPersistentSubscriptionMessage(cb, subscriptionId, streamId,
        bufferSize, userCredentials, onEventAppeared, onSubscriptionDropped, settings.maxRetries,
        settings.operationTimeout));
  });
};

module.exports = EventStorePersistentSubscription;

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

var util = __webpack_require__(12);
var ensure = __webpack_require__(5);
var PersistentSubscriptionNakEventAction = __webpack_require__(66);
var SubscriptionDropReason = __webpack_require__(30);

function DropSubscriptionEvent() {}

function EventStorePersistentSubscriptionBase(
    subscriptionId, streamId,
    eventAppeared, subscriptionDropped,
    userCredentials, log, verboseLogging, settings, bufferSize, autoAck
) {
  bufferSize = bufferSize === undefined ? 10 : bufferSize;
  autoAck = autoAck === undefined ? true : autoAck;

  this._subscriptionId = subscriptionId;
  this._streamId = streamId;
  this._eventAppeared = eventAppeared;
  this._subscriptionDropped = subscriptionDropped;
  this._userCredentials = userCredentials;
  this._log = log;
  this._verbose = verboseLogging;
  this._settings = settings;
  this._bufferSize = bufferSize;
  this._autoAck = autoAck;

  this._subscription = null;
  this._dropData = null;
  this._queue = [];
  this._isProcessing = false;
  this._isDropped = false;
}

EventStorePersistentSubscriptionBase.prototype.start = function() {
  this._stopped = false;

  var self = this;
  return this._startSubscription(this._subscriptionId, this._streamId, this._bufferSize, this._userCredentials,
                          this._onEventAppeared.bind(this), this._onSubscriptionDropped.bind(this), this._settings)
      .then(function(subscription) {
        self._log.debug('Subscription started.');
        self._subscription = subscription;
        return self;
      });
};

EventStorePersistentSubscriptionBase.prototype._startSubscription = function() {
  throw new Error("EventStorePersistentSubscriptionBase._startSubscription abstract method called." +
                  this.constructor.name);
};

/**
 * @param {ResolvedEvent[]|ResolvedEvent} events
 */
EventStorePersistentSubscriptionBase.prototype.acknowledge = function(events) {
  ensure.notNull(events, "events");

  if (this._subscription === null) throw new Error("Invalid operation. Subscription is not active yet.");
  if (!Array.isArray(events)) events = [events];
  var ids = events.map(function(x) { return x.originalEvent.eventId; });
  this._subscription.notifyEventsProcessed(ids);
};

/**
 * @param {ResolvedEvent[]|ResolvedEvent} events
 * @param {number} action One of PersistentSubscriptionNakEventAction
 * @param {string} reason
 */
EventStorePersistentSubscriptionBase.prototype.fail = function(events, action, reason) {
  ensure.notNull(events, "events");
  PersistentSubscriptionNakEventAction.isValid(action);
  ensure.notNull(reason, "reason");

  if (this._subscription === null) throw new Error("Invalid operation. Subscription is not active yet.");
  if (!Array.isArray(events)) events = [events];
  var ids = events.map(function(x) { return x.originalEvent.eventId; });
  this._subscription.notifyEventsFailed(ids, action, reason);
};

//TODO: this should return a promise
EventStorePersistentSubscriptionBase.prototype.stop = function() {
  if (this._verbose) this._log.debug("Persistent Subscription to %s: requesting stop...", this._streamId);
  this._enqueueSubscriptionDropNotification(SubscriptionDropReason.UserInitiated, null);
  //TODO figure out timeout with Promise still running
  //if (!_stopped.Wait(timeout))
    //throw new TimeoutException(string.Format("Could not stop {0} in time.", GetType().Name));
};

EventStorePersistentSubscriptionBase.prototype._enqueueSubscriptionDropNotification = function(reason, error) {
  // if drop data was already set -- no need to enqueue drop again, somebody did that already
  if (!this._dropData) {
    this._dropData = {reason: reason, error: error};
    this._enqueue(new DropSubscriptionEvent());
  }
};

EventStorePersistentSubscriptionBase.prototype._onSubscriptionDropped = function(subscription, reason, exception) {
  this._enqueueSubscriptionDropNotification(reason, exception);
};

EventStorePersistentSubscriptionBase.prototype._onEventAppeared = function(subscription, resolvedEvent) {
  this._enqueue(resolvedEvent);
};

EventStorePersistentSubscriptionBase.prototype._enqueue = function(resolvedEvent) {
  this._queue.push(resolvedEvent);
  if (!this._isProcessing) {
    this._isProcessing = true;
    setImmediate(this._processQueue.bind(this));
  }
};

function runAsync(fn) {
  try {
    return Promise.resolve(fn());
  } catch(e) {
    return Promise.reject(e);
  }
}

EventStorePersistentSubscriptionBase.prototype._processQueue = function() {
  var ev = this._queue.shift();
  if (!ev) {
    this._isProcessing = false;
    return;
  }

  if (ev instanceof DropSubscriptionEvent) // drop subscription artificial ResolvedEvent
  {
    if (this._dropData === null) throw new Error("Drop reason not specified.");
    this._dropSubscription(this._dropData.reason, this._dropData.error);
    this._isProcessing = false;
    return;
  }
  if (this._dropData !== null)
  {
    this._dropSubscription(this._dropData.reason, this._dropData.error);
    this._isProcessing = false;
    return;
  }
  var self = this;
  runAsync(function() {
    return self._eventAppeared(self, ev);
  })
    .then(function() {
      if(self._autoAck) self._subscription.notifyEventsProcessed([ev.originalEvent.eventId]);
      if (self._verbose) {
        self._log.debug("Persistent Subscription to %s: processed event (%s, %d, %s @ %d).",
          self._streamId, ev.originalEvent.eventStreamId, ev.originalEvent.eventNumber, ev.originalEvent.eventType,
          ev.originalEventNumber);
      }
      return false;
    }, function(err) {
      //TODO GFY should we autonak here?
      self._dropSubscription(SubscriptionDropReason.EventHandlerException, err);
      self._isProcessing = false;
      return true;
    })
    .then(function (faulted) {
      if (faulted) return;
      self._processQueue();
    });
};

EventStorePersistentSubscriptionBase.prototype._dropSubscription = function(reason, error) {
  if (!this._isDropped)
  {
    this._isDropped = true;
    if (this._verbose) {
      this._log.debug("Persistent Subscription to %s: dropping subscription, reason: %s %s.",
        this._streamId, reason, error);
    }

    if (this._subscription !== null) this._subscription.unsubscribe();
    if (this._subscriptionDropped !== null) {
      try {
        this._subscriptionDropped(this, reason, error);
      } catch (e) {
        this._log.error(e, "Persistent Subscription to %s: subscriptionDropped callback failed.", this._streamId);
      }
    }
    this._stopped = true;
  }
};

module.exports = EventStorePersistentSubscriptionBase;


/***/ }),
/* 66 */
/***/ (function(module, exports) {

const PersistentSubscriptionNakEventAction = Object.freeze({
  Unknown: 0,
  Park: 1,
  Retry: 2,
  Skip: 3,
  Stop: 4,
  isValid: function(value) {
    for(var k in PersistentSubscriptionNakEventAction) {
      if (PersistentSubscriptionNakEventAction[k] === value) return true;
    }
    return false;
  }
});

module.exports = PersistentSubscriptionNakEventAction;

/***/ }),
/* 67 */
/***/ (function(module, exports) {

exports.metastreamOf = function(stream) {
  return '$$' + stream;
};
exports.isMetastream = function(stream) {
  return stream.indexOf('$$') === 0;
};

/***/ }),
/* 68 */
/***/ (function(module, exports) {

const SystemEventTypes = Object.freeze({
  StreamMetadata: '$metadata'
});

module.exports = SystemEventTypes;

/***/ }),
/* 69 */
/***/ (function(module, exports) {

function StaticEndpointDiscoverer(tcpEndPoint, useSsl) {
  this._nodeEndpoints = {
    tcpEndPoint: useSsl ? null : tcpEndPoint,
    secureTcpEndPoint: useSsl ? tcpEndPoint : null
  }
}

StaticEndpointDiscoverer.prototype.discover = function(failedTcpEndpoint) {
  return Promise.resolve(this._nodeEndpoints);
};

module.exports = StaticEndpointDiscoverer;

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

const ClusterInfo = __webpack_require__(71);
const GossipSeed = __webpack_require__(9);
const NodeEndPoints = __webpack_require__(73);
const shuffle = __webpack_require__(74);

function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * ClusterDiscoverer
 * @constructor
 * @class
 * @param {Logger} log - Logger instance
 * @param {Object} settings - Settings object
 * @param {Object} dnsService - DNS service to perform DNS lookup
 * @param {Object} httpService - HTTP service to perform http requests
 */
function ClusterDiscoverer(log, settings, dnsService, httpService) {
  if (!settings.clusterDns && (!settings.seeds || settings.seeds.length === 0))
    throw new Error('Both clusterDns and seeds are null/empty.');
  this._log = log;

  this._settings = settings;
  this._dnsService = dnsService;
  this._httpService = httpService;
}

/**
 * Discover Cluster endpoints
 * @param {Object} failedTcpEndPoint - The failed TCP endpoint which were used by the handler
 * @returns {Promise.<NodeEndPoints>}
 */
ClusterDiscoverer.prototype.discover = async function (failedTcpEndPoint) {
  let attempts = 0;
  while (attempts++ < this._settings.maxDiscoverAttempts) {
    try {
      const candidates = await this._getGossipCandidates(this._settings.managerExternalHttpPort);
      const gossipSeeds = candidates.filter(
        (candidate) =>
          !failedTcpEndPoint ||
          !(candidate.endPoint.host === failedTcpEndPoint.host && candidate.endPoint.port === failedTcpEndPoint.port)
      );
      let gossipSeedsIndex = 0;
      let clusterInfo;
      do {
        try {
          clusterInfo = await this._clusterInfo(gossipSeeds[gossipSeedsIndex], this._settings.gossipTimeout);
          if (!clusterInfo.bestNode) {
            this._log.info(
              `Discovering attempt ${attempts}/${this._settings.maxDiscoverAttempts} failed: no candidate found.`
            );
            continue;
          }
        } catch (err) {}
      } while (++gossipSeedsIndex < gossipSeeds.length);
      if (clusterInfo) {
        return NodeEndPoints.createFromGossipMember(clusterInfo.bestNode);
      }
    } catch (err) {
      this._log.info(
        `Discovering attempt ${attempts}/${this._settings.maxDiscoverAttempts} failed with error: ${err}.\n${err.stack}`
      );
    }
    await wait(this._settings.discoverDelay);
  }
  throw new Error(`Failed to discover candidate in ${this._settings.maxDiscoverAttempts} attempts.`);
};

/**
 * Get gossip candidates either from DNS or from gossipSeeds settings
 * @private
 * @param {Number} managerExternalHttpPort - Http port of the manager (or the http port of the node for OSS clusters)
 * @returns {Promise.<GossipSeed[]>}
 */
ClusterDiscoverer.prototype._getGossipCandidates = async function (managerExternalHttpPort) {
  const gossipSeeds =
    this._settings.seeds && this._settings.seeds.length > 0
      ? this._settings.seeds
      : (await this._resolveDns(this._settings.clusterDns)).map(
          (address) => new GossipSeed({ host: address, port: managerExternalHttpPort }, undefined)
        );
  return shuffle(gossipSeeds);
};

/**
 * Resolve the cluster DNS discovery address to retrieve belonging ip addresses
 * @private
 * @param {String} clusterDns - Cluster DNS discovery address
 * @returns {Promise.<String[]>}
 */
ClusterDiscoverer.prototype._resolveDns = async function (clusterDns) {
  const dnsOptions = {
    family: 4,
    hints: this._dnsService.ADDRCONFIG | this._dnsService.V4MAPPED,
    all: true,
  };
  const result = await this._dnsService.lookup(clusterDns, dnsOptions);
  if (!result || result.length === 0) {
    throw new Error(`No result from dns lookup for ${clusterDns}`);
  }
  return result.map((address) => address.address);
};

/**
 * Get cluster informations (gossip members)
 * @param {GossipSeed} candidate - candidate to get informations from
 * @param {Number} timeout - timeout for the http request
 * @returns {Promise.<ClusterInfo>}
 */
ClusterDiscoverer.prototype._clusterInfo = async function (candidate, timeout) {
  return new Promise((resolve, reject) => {
    const options = {
      host: candidate.endPoint.host,
      port: candidate.endPoint.port,
      path: '/gossip?format=json',
      timeout: timeout,
    };
    if (candidate.hostHeader) {
      options.headers = {
        Host: candidate.hostHeader,
      };
    }

    const request = this._httpService.request(options, (res) => {
      if (res.statusCode !== 200) {
        this._log.info('Trying to get gossip from', candidate, 'failed with status code:', res.statusCode);
        reject(new Error(`Gossip candidate returns a ${res.statusCode} error`));
        return;
      }
      let result = '';
      res.on('data', (chunk) => {
        result += chunk.toString();
      });
      res.on('end', function () {
        try {
          result = JSON.parse(result);
        } catch (e) {
          reject(new Error('Unable to parse gossip response'));
        }
        resolve(new ClusterInfo(result.members));
      });
    });

    request.setTimeout(timeout);

    request.on('timeout', () => {
      this._log.info('Trying to get gossip from', candidate, 'timed out.');
      request.destroy();
      reject(new Error('Connection to gossip timed out'));
    });

    request.on('error', (error) => {
      this._log.info('Trying to get gossip from', candidate, 'errored', error);
      request.destroy();
      reject(new Error('Connection to gossip errored'));
    });

    request.end();
  });
};

module.exports = ClusterDiscoverer;


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

const MemberInfo = __webpack_require__(72);

const VNodeStates = Object.freeze({
  Initializing: 0,
  Unknown: 1,
  PreReplica: 2,
  CatchingUp: 3,
  Clone: 4,
  Slave: 5,
  PreMaster: 6,
  Master: 7,
  Manager: 8,
  ShuttingDown: 9,
  Shutdown: 10
});

function ClusterInfo(members) {
  this._members = members.map(member => new MemberInfo(member));

  Object.defineProperty(this, 'bestNode', {
    enumerable: true,
    get: function () {
      return this._getBestNode();
    }
  });
}

ClusterInfo.prototype._getBestNode = function () {
  return this._members
  .filter(member => member.isAlive && member.isAllowedToConnect)
  .sort(function (a, b) {
    return VNodeStates[b.state] - VNodeStates[a.state];
  })[0];
}

module.exports = ClusterInfo;

/***/ }),
/* 72 */
/***/ (function(module, exports) {

const NOT_ALLOWED_STATES = [
  'Manager',
  'ShuttingDown',
  'Shutdown'
];

function MemberInfo(informations) {
  this._instanceId = informations.instanceId;
  this._timeStamp = informations.timeStamp;
  this._state = informations.state;
  this._isAlive = informations.isAlive;
  this._internalTcpIp = informations.internalTcpIp;
  this._internalTcpPort = informations.internalTcpPort;
  this._internalSecureTcpPort = informations.internalSecureTcpPort;
  this._externalTcpIp = informations.externalTcpIp;
  this._externalTcpPort = informations.externalTcpPort;
  this._externalSecureTcpPort = informations.externalSecureTcpPort;
  this._internalHttpIp = informations.internalHttpIp;
  this._internalHttpPort = informations.internalHttpPort;
  this._externalHttpIp = informations.externalHttpIp;
  this._externalHttpPort = informations.externalHttpPort;
  this._lastCommitPosition = informations.lastCommitPosition;
  this._writerCheckpoint = informations.writerCheckpoint;
  this._chaserCheckpoint = informations.chaserCheckpoint;
  this._epochPosition = informations.epochPosition;
  this._epochNumber = informations.epochNumber;
  this._epochId = informations.epochId;
  this._nodePriority = informations.nodePriority;

  Object.defineProperty(this, 'state', {
    enumerable: true,
    get: function () {
      return this._state;
    }
  });

  Object.defineProperty(this, 'isAllowedToConnect', {
    enumerable: true,
    get: function () {
      return !NOT_ALLOWED_STATES.includes(this._state);
    }
  });

  Object.defineProperty(this, 'isAlive', {
    enumerable: true,
    get: function () {
      return this._isAlive;
    }
  });

  Object.defineProperty(this, 'externalTcpIp', {
    enumerable: true,
    get: function () {
      return this._externalTcpIp;
    }
  });

  Object.defineProperty(this, 'externalTcpPort', {
    enumerable: true,
    get: function () {
      return this._externalTcpPort;
    }
  });

  Object.defineProperty(this, 'externalSecureTcpPort', {
    enumerable: true,
    get: function () {
      return this._externalSecureTcpPort;
    }
  });
}

module.exports = MemberInfo;

/***/ }),
/* 73 */
/***/ (function(module, exports) {

function NodeEndPoints(tcpEndPoint, secureTcpEndPoint) {
  if (tcpEndPoint === null && secureTcpEndPoint === null) throw new Error('Both endpoints are null.');
  Object.defineProperties(this, {
    tcpEndPoint: {
      enumerable: true,
      value: tcpEndPoint
    },
    secureTcpEndPoint: {
      enumerable: true,
      value: secureTcpEndPoint
    }
  });
}

NodeEndPoints.createFromGossipMember = function (member) {
  const normTcp = { host: member.externalTcpIp, port: member.externalTcpPort };
  const secTcp = member.externalSecureTcpPort > 0
    ? { host: member.externalTcpIp, port: member.externalSecureTcpPort }
    : null;
  return new NodeEndPoints(normTcp, secTcp);
}

module.exports = NodeEndPoints

/***/ }),
/* 74 */
/***/ (function(module, exports) {

function rndNext(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function shuffle (arr, from, to) {
  if (arr.length <= 1){
    return arr;
  }
  if (!from) {
    from = 0;
  }
  if (!to) {
    to = arr.length - 1;
  }
  const newArr = [...arr];
  if (from >= to) return;
  for (var current = from; current <= to; ++current) {
    var index = rndNext(current, to + 1);
    var tmp = newArr[index];
    newArr[index] = newArr[current];
    newArr[current] = tmp;
  }
  return newArr;
};

module.exports = shuffle;

/***/ }),
/* 75 */
/***/ (function(module, exports) {

function NoopLogger() {
}
NoopLogger.prototype.debug = function() {};
NoopLogger.prototype.info = function() {};
NoopLogger.prototype.warn = function() {};
NoopLogger.prototype.error = function() {};

module.exports = NoopLogger;


/***/ }),
/* 76 */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),
/* 77 */
/***/ (function(module, exports) {

module.exports = require("dns");

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

const ensure = __webpack_require__(5);
const ProjectionsClient = __webpack_require__(79);

/**
 * Creates a new instance of ProjectionsManager.
 * @param {Logger} log              Instance of Logger to use for logging.
 * @param {string} httpEndPoint     HTTP endpoint of an Event Store server.
 * @param {number} operationTimeout Operation timeout in milliseconds.
 * @constructor
 */
function ProjectionsManager(log, httpEndPoint, operationTimeout) {
  ensure.notNull(log, "log");
  ensure.notNull(httpEndPoint, "httpEndPoint");
  this._client = new ProjectionsClient(log, operationTimeout);
  this._httpEndPoint = httpEndPoint;
}

/**
 * Enables a projection.
 * @param name            The name of the projection.
 * @param userCredentials Credentials for a user with permission to enable a projection.
 * @returns {Promise<void>}
 */
ProjectionsManager.prototype.enable = function(name, userCredentials) {
  return this._client.enable(this._httpEndPoint, name, userCredentials);
};

/**
 * Aborts and disables a projection without writing a checkpoint.
 * @param name            The name of the projection.
 * @param userCredentials Credentials for a user with permission to disable a projection.
 * @returns {Promise<void>}
 */
ProjectionsManager.prototype.disable = function(name, userCredentials) {
  return this._client.disable(this._httpEndPoint, name, userCredentials);
};

/**
 * Disables a projection.
 * @param name            The name of the projection.
 * @param userCredentials Credentials for a user with permission to disable a projection.
 * @returns {Promise<void>}
 */
ProjectionsManager.prototype.abort = function(name, userCredentials) {
  return this._client.abort(this._httpEndPoint, name, userCredentials);
};

/**
 * Reset a projection. (This will re-emit events, streams that are written to from the projection will also be soft deleted)
 * @param name            The name of the projection.
 * @param userCredentials Credentials for a user with permission to reset a projection.
 * @returns {Promise<void>}
 */
ProjectionsManager.prototype.reset = function(name, userCredentials) {
  return this._client.reset(this._httpEndPoint, name, userCredentials);
};

/**
 * Creates a one-time query.
 * @param query           The JavaScript source code for the query.
 * @param userCredentials Credentials for a user with permission to create a query.
 * @returns {Promise<void>}
 */
ProjectionsManager.prototype.createOneTime = function(query, userCredentials) {
  return this._client.createOneTime(this._httpEndPoint, query, userCredentials);
};

/**
 * Creates a one-time query.
 * @param name            A name for the query.
 * @param query           The JavaScript source code for the query.
 * @param userCredentials Credentials for a user with permission to create a query.
 * @returns {Promise<void>}
 */
ProjectionsManager.prototype.createTransient = function(name, query, userCredentials) {
  return this._client.createTransient(this._httpEndPoint, query, userCredentials);
};

/**
 * Creates a one-time query.
 * @param name                The name of the projection.
 * @param query               The JavaScript source code for the query.
 * @param trackEmittedStreams Whether the streams emitted by this projection should be tracked.
 * @param userCredentials     Credentials for a user with permission to create a query.
 * @returns {Promise<void>}
 */
ProjectionsManager.prototype.createContinuous = function(name, query, trackEmittedStreams, userCredentials) {
  return this._client.createContinuous(this._httpEndPoint, name, query, trackEmittedStreams, userCredentials);
};

/**
 * Lists the status of all projections.
 * @param userCredentials Credentials for the operation.
 * @returns {Promise<ProjectionDetails[]>}
 */
ProjectionsManager.prototype.listAll = function(userCredentials) {
  return this._client.listAll(this._httpEndPoint, userCredentials);
};

/**
 * Lists the status of all one-time projections.
 * @param userCredentials Credentials for the operation.
 * @returns {Promise<ProjectionDetails[]>}
 */
ProjectionsManager.prototype.listOneTime = function(userCredentials) {
  return this._client.listOneTime(this._httpEndPoint, userCredentials);
};

/**
 * Lists the status of all continuous projections.
 * @param userCredentials Credentials for the operation.
 * @returns {Promise<ProjectionDetails[]>}
 */
ProjectionsManager.prototype.listContinuous = function(userCredentials) {
  return this._client.listContinuous(this._httpEndPoint, userCredentials);
};

/**
 * Gets the status of a projection.
 * @param name            The name of the projection.
 * @param userCredentials Credentials for the operation.
 * @returns {Promise<string>} String of JSON containing projection status.
 */
ProjectionsManager.prototype.getStatus = function(name, userCredentials) {
  return this._client.getStatus(this._httpEndPoint, name, userCredentials);
};

/**
 * Gets the state of a projection.
 * @param name            The name of the projection.
 * @param userCredentials Credentials for the operation.
 * @returns {Promise<string>} String of JSON containing projection state.
 */
ProjectionsManager.prototype.getState = function(name, userCredentials) {
  return this._client.getState(this._httpEndPoint, name, userCredentials);
};

/**
 * Gets the state of a projection for a specified partition.
 * @param name            The name of the projection.
 * @param partitionId     The id of the partition.
 * @param userCredentials Credentials for the operation.
 * @returns {Promise<string>} String of JSON containing projection state.
 */
ProjectionsManager.prototype.getPartitionState = function(name, partitionId, userCredentials) {
  return this._client.getPartitionState(this._httpEndPoint, name, partitionId, userCredentials);
};

/**
 * Gets the state of a projection.
 * @param name            The name of the projection.
 * @param userCredentials Credentials for the operation.
 * @returns {Promise<string>} String of JSON containing projection state.
 */
ProjectionsManager.prototype.getResult = function(name, userCredentials) {
  return this._client.getResult(this._httpEndPoint, name, userCredentials);
};

/**
 * Gets the state of a projection for a specified partition.
 * @param name            The name of the projection.
 * @param partitionId     The id of the partition.
 * @param userCredentials Credentials for the operation.
 * @returns {Promise<string>} String of JSON containing projection state.
 */
ProjectionsManager.prototype.getPartitionResult = function(name, partitionId, userCredentials) {
  return this._client.getPartitionResult(this._httpEndPoint, name, partitionId, userCredentials);
};

/**
 * Gets the statistics of a projection.
 * @param name            The name of the projection.
 * @param userCredentials Credentials for the operation.
 * @returns {Promise<string>} String of JSON containing projection statistics.
 */
ProjectionsManager.prototype.getStatistics = function(name, userCredentials) {
  return this._client.getStatistics(this._httpEndPoint, name, userCredentials);
};

/**
 * Gets the status of a query.
 * @param name            The name of the query.
 * @param userCredentials Credentials for the operation.
 * @returns {Promise<string>} String of JSON containing query status.
 */
ProjectionsManager.prototype.getQuery = function(name, userCredentials) {
  return this._client.getQuery(this._httpEndPoint, name, userCredentials);
};

/**
 * Updates the definition of a query.
 * @param name            The name of the query.
 * @param query           The JavaScript source code for the query.
 * @param userCredentials Credentials for the operation.
 * @returns {Promise<void>}
 */
ProjectionsManager.prototype.updateQuery = function(name, query, userCredentials) {
  return this._client.updateQuery(this._httpEndPoint, name, query, userCredentials);
};

/**
 * Updates the definition of a query.
 * @param name                    The name of the projection.
 * @param deleteEmittedStreams    Whether to delete the streams that were emitted by this projection.
 * @param deleteStateStream       Where to delete the state stream for this projection
 * @param deleteCheckpointStream  Where to delete the checkpoint stream for this projection
 * @param userCredentials         Credentials for a user with permission to delete a projection.
 * @returns {Promise<void>}
 */
ProjectionsManager.prototype.delete = function(name, deleteEmittedStreams, deleteStateStream, deleteCheckpointStream, userCredentials) {
  return this._client.delete(this._httpEndPoint, name, deleteEmittedStreams, deleteStateStream, deleteCheckpointStream, userCredentials);
};

module.exports = ProjectionsManager;

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

const http = __webpack_require__(76);
const url = __webpack_require__(80);
const util = __webpack_require__(12);
const ProjectionCommandFailedError = __webpack_require__(81);

const HTTP_OK = 200;
const HTTP_CREATED = 201;

function safeParseJson(json) {
  try {
    return JSON.parse(json);
  } catch(e) {
    return null;
  }
}

function ProjectionsClient(log, operationTimeout) {
  this._log = log;
  this._operationTimeout = operationTimeout;
}

ProjectionsClient.prototype.enable = function(httpEndPoint, name, userCredentials) {
  return this.sendPost(httpEndPoint + '/projection/' + name + '/command/enable', '', userCredentials, HTTP_OK);
};

ProjectionsClient.prototype.disable = function(httpEndPoint, name, userCredentials) {
  return this.sendPost(httpEndPoint + '/projection/' + name + '/command/disable', '', userCredentials, HTTP_OK);
};

ProjectionsClient.prototype.abort = function(httpEndPoint, name, userCredentials) {
  return this.sendPost(httpEndPoint + '/projection/' + name + '/command/abort', '', userCredentials, HTTP_OK);
};

ProjectionsClient.prototype.reset = function(httpEndPoint, name, userCredentials) {
  return this.sendPost(httpEndPoint + '/projection/' + name + '/command/reset', '', userCredentials, HTTP_OK);
};

ProjectionsClient.prototype.createOneTime = function(httpEndPoint, query, userCredentials) {
  return this.sendPost(httpEndPoint + '/projections/onetime?type=JS', query, userCredentials, HTTP_CREATED);
};

ProjectionsClient.prototype.createTransient = function(httpEndPoint, name, query, userCredentials) {
  return this.sendPost(httpEndPoint + '/projections/transient?name=' + name + '&type=JS', query, userCredentials, HTTP_CREATED);
};

ProjectionsClient.prototype.createContinuous = function(httpEndPoint, name, query, trackEmittedStreams, userCredentials) {
  return this.sendPost(httpEndPoint + '/projections/continuous?name=' + name + '&type=JS&emit=1&trackemittedstreams=' + trackEmittedStreams, query, userCredentials, HTTP_CREATED);
};

ProjectionsClient.prototype.listAll = function(httpEndPoint, userCredentials) {
  return this.sendGet(httpEndPoint + '/projections/any', userCredentials, HTTP_OK)
    .then(function (json) {
      var r = safeParseJson(json);
      if (r && r.projections) return r.projections;
      return null;
    });
};

ProjectionsClient.prototype.listOneTime = function(httpEndPoint, userCredentials) {
  return this.sendGet(httpEndPoint + '/projections/onetime', userCredentials, HTTP_OK)
    .then(function (json) {
      var r = safeParseJson(json);
      if (r && r.projections) return r.projections;
      return null;
    });
};

ProjectionsClient.prototype.listContinuous = function(httpEndPoint, userCredentials) {
  return this.sendGet(httpEndPoint + '/projections/continuous', userCredentials, HTTP_OK)
    .then(function (json) {
      var r = safeParseJson(json);
      if (r && r.projections) return r.projections;
      return null;
    });
};

ProjectionsClient.prototype.getStatus = function(httpEndPoint, name, userCredentials) {
  return this.sendGet(httpEndPoint + '/projection/' + name, userCredentials, HTTP_OK);
};

ProjectionsClient.prototype.getState = function(httpEndPoint, name, userCredentials) {
  return this.sendGet(httpEndPoint + '/projection/' + name + '/state', userCredentials, HTTP_OK);
};

ProjectionsClient.prototype.getPartitionState = function(httpEndPoint, name, partitionId, userCredentials) {
  return this.sendGet(httpEndPoint + '/projection/' + name + '/state?partition=' + partitionId, userCredentials, HTTP_OK);
};

ProjectionsClient.prototype.getResult = function(httpEndPoint, name, userCredentials) {
  return this.sendGet(httpEndPoint + '/projection/' + name + '/result', userCredentials, HTTP_OK);
};

ProjectionsClient.prototype.getPartitionResult = function(httpEndPoint, name, partitionId, userCredentials) {
  return this.sendGet(httpEndPoint + '/projection/' + name + '/result?partition=' + partitionId, userCredentials, HTTP_OK);
};

ProjectionsClient.prototype.getStatistics = function(httpEndPoint, name, userCredentials) {
  return this.sendGet(httpEndPoint + '/projection/' + name + '/statistics', userCredentials, HTTP_OK);
};

ProjectionsClient.prototype.getQuery = function(httpEndPoint, name, userCredentials) {
  return this.sendGet(httpEndPoint + '/projection/' + name + '/query', userCredentials, HTTP_OK);
};

ProjectionsClient.prototype.updateQuery = function(httpEndPoint, name, query, userCredentials) {
  return this.sendPut(httpEndPoint + '/projection/' + name + '/query?type=JS', query, userCredentials, HTTP_OK);
};

ProjectionsClient.prototype.delete = function(httpEndPoint, name, deleteEmittedStreams, deleteStateStream, deleteCheckpointStream, userCredentials) {
  return this.sendDelete(httpEndPoint + '/projection/' + name + '?deleteStateStream=' + deleteStateStream + '&deleteCheckpointStream=' + deleteCheckpointStream + '&deleteEmittedStreams=' + deleteEmittedStreams, '', userCredentials, HTTP_OK);
};

ProjectionsClient.prototype.request = function(method, _url, data, userCredentials, expectedCode) {
  const options = url.parse(_url);
  options.method = method;
  if (userCredentials) {
    options.auth = [userCredentials.username, userCredentials.password].join(':');
  }
  var self = this;
  return new Promise(function (resolve, reject) {
    const timeout = setTimeout(function () {
      reject(new Error(util.format('Request timed out for %s on %s', method, _url)))
    }, self._operationTimeout);
    const req = http.request(options, function (res) {
      const hasExpectedCode = res.statusCode === expectedCode;
      var result = '';
      res.setEncoding('utf8');
      res.on('data', function (chunk) {
        result += chunk;
      });
      res.on('end', function () {
        if (hasExpectedCode) {
          clearTimeout(timeout);
          resolve(result);
        } else {
          clearTimeout(timeout);
          reject(new ProjectionCommandFailedError(
            res.statusCode,
            util.format('Server returned %d (%s) for %s on %s', res.statusCode, res.statusMessage, method, _url)
          ));
        }
      });
    });
    req.on('error', reject);
    if (data) {
      req.setHeader('Content-Length', data.length);
      req.setHeader('Content-Type', 'application/json');
      req.write(data);
    }
    req.end();
  });
};

function voidResult() {}

ProjectionsClient.prototype.sendGet = function(_url, userCredentials, expectedCode) {
  return this.request('GET', _url, null, userCredentials, expectedCode);
};

ProjectionsClient.prototype.sendPost = function(_url, data, userCredentials, expectedCode) {
  return this.request('POST', _url, data, userCredentials, expectedCode)
    .then(voidResult);
};

ProjectionsClient.prototype.sendPut = function(_url, data, userCredentials, expectedCode) {
  return this.request('PUT', _url, data, userCredentials, expectedCode)
    .then(voidResult);
};

ProjectionsClient.prototype.sendDelete = function(_url, data, userCredentials, expectedCode) {
  return this.request('DELETE', _url, data, userCredentials, expectedCode)
    .then(voidResult);
};

module.exports = ProjectionsClient;


/***/ }),
/* 80 */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

const util = __webpack_require__(12);

function ProjectionCommandFailedError(httpStatusCode, message) {
  Error.captureStackTrace(this, this.constructor);
  this.httpStatusCode = httpStatusCode;
  this.message = message;
}
util.inherits(ProjectionCommandFailedError, Error);

module.exports = ProjectionCommandFailedError;

/***/ }),
/* 82 */
/***/ (function(module, exports) {

const SystemMetadata = Object.freeze({
  maxAge: '$maxAge',
  maxCount: '$maxCount',
  truncateBefore: '$tb',
  cacheControl: '$cacheControl',
  acl: '$acl',
  aclRead: '$r',
  aclWrite: '$w',
  aclDelete: '$d',
  aclMetaRead: '$mr',
  aclMetaWrite: '$mw',
  userStreamAcl: '$userStreamAcl',
  systemStreamAcl: '$systemStreamAcl'
});

module.exports = SystemMetadata;

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

var util = __webpack_require__(12);
var fs = __webpack_require__(84);
var os = __webpack_require__(85);

function FileLogger(filePath, append) {
  this._filePath = filePath;
  if (!append) {
    try {
      fs.unlinkSync(filePath);
    } catch(e) {}
  }
}

function createLine(level, args, argsStartIndex) {
  var msg = util.format.apply(util, Array.prototype.slice.call(args, argsStartIndex));
  return util.format('%s %s - %s%s', new Date().toISOString().substr(11,12), level, msg, os.EOL);
}

FileLogger.prototype.debug = function() {
  var line = createLine('DEBUG', arguments, 0);
  fs.appendFileSync(this._filePath, line);
};

FileLogger.prototype.info = function() {
  var line = createLine('INFO', arguments, 0);
  fs.appendFileSync(this._filePath, line);
};

FileLogger.prototype.warn = function() {
  var line = createLine('WARN', arguments, 0);
  fs.appendFileSync(this._filePath, line);
};

FileLogger.prototype.error = function(e) {
  var hasError = e instanceof Error;
  var line = createLine('ERROR', arguments, hasError ? 1 : 0);
  if (hasError) {
    line += e.stack + os.EOL;
  }
  fs.appendFileSync(this._filePath, line);
};


module.exports = FileLogger;


/***/ }),
/* 84 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 85 */
/***/ (function(module, exports) {

module.exports = require("os");

/***/ })
/******/ ]);