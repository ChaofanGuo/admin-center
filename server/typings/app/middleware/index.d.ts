// This file is created by egg-ts-helper@1.26.0
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportException from '../../../app/middleware/exception';
import ExportLog from '../../../app/middleware/log';

declare module 'egg' {
  interface IMiddleware {
    exception: typeof ExportException;
    log: typeof ExportLog;
  }
}
