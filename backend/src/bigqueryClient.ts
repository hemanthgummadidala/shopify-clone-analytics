import path from 'path';
import { BigQuery } from '@google-cloud/bigquery';

export const BQ_PROJECT = process.env.BIGQUERY_PROJECT || 'shopify-clone-499604';
export const BQ_DATASET = process.env.BIGQUERY_DATASET || 'analytics_541293436';
/** Daily table suffix, e.g. 20260616 from events_20260616 / users_20260616 */
export const BQ_DATE_SUFFIX = process.env.BIGQUERY_DATE_SUFFIX || '20260616';

const keyFile =
  process.env.GOOGLE_APPLICATION_CREDENTIALS ||
  path.join(__dirname, '../gcp-service-account-key.json');

export const bigquery = new BigQuery({
  projectId: BQ_PROJECT,
  keyFilename: keyFile,
});

export function eventsTableRef(): string {
  return `\`${BQ_PROJECT}.${BQ_DATASET}.events_*\``;
}
