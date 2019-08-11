import {
  BASE_TABLE_HEADER as baseHeader,
  VISIBLE_DATABASE_FIELD_TYPES as visibleFieldTypes,
} from './constants';

const filterVisibleFields = fields => fields.filter(field => visibleFieldTypes.includes(field.type));

const getFieldHeader = fields => filterVisibleFields(fields).map(field => field.label);

const getBaseFields = record => [
  record.id,
  record.title,
  record.status.name,
  record.created_at,
  record.updated_at,
  record.finished_at,
];

const getFields = record => record.record_fields.map(field => field.value).reverse();

export const getTableHeader = fields => baseHeader.concat(getFieldHeader(fields));

export const getTableBody = records => records.map(record =>
  getBaseFields(record).concat(getFields(record))
);
