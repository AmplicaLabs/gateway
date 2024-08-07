import { RedisClient } from 'bullmq';
import { EventEmitter2 } from '@nestjs/event-emitter';

// Redis can send events before the application is ready
// redisReady is used to track if the connection is ready
// eslint-disable-next-line import/no-mutable-exports
export let redisReady: boolean = false;

export namespace RedisUtils {
  /**
   * 45 days upper limit to avoid keeping abandoned data forever
   */
  export const STORAGE_EXPIRE_UPPER_LIMIT_SECONDS = 45 * 24 * 60 * 60;
  /**
   * batch Lock expire time which applies during closing operation
   */
  export const BATCH_LOCK_EXPIRE_SECONDS = 6;
  /**
   * To be able to provide mostly unique nonces to submit transactions on chain we would need to check a number of
   * temporarily locked keys on redis side and get the first available one. This number defines the number of keys
   * we should look into before giving up
   */
  export const NUMBER_OF_NONCE_KEYS_TO_CHECK = 50;
  /**
   * Nonce keys have to get expired shortly so that if any of nonce numbers get skipped we would still have a way to
   * submit them after expiration
   */
  export const NONCE_KEY_EXPIRE_SECONDS = 2;
  const CHAIN_NONCE_KEY = 'chain:nonce';

  export function getNonceKey(suffix: string) {
    return `${CHAIN_NONCE_KEY}:${suffix}`;
  }

  /**
   * Hash set key containing ITxStatus values for submitted chain transactions we are watching for completion
   */
  export const TXN_WATCH_LIST_KEY = 'txnWatchList';
}

export function redisEventsToEventEmitter(client: RedisClient, eventEmitter: EventEmitter2) {
  client.on('error', (err) => {
    eventEmitter.emit('redis.error', err);
  });
  client.on('ready', () => {
    redisReady = true;
    eventEmitter.emit('redis.ready');
  });
  client.on('close', () => {
    eventEmitter.emit('redis.close');
  });
}
