import { DataSource } from 'typeorm'

export const AppDataSource = new DataSource({
  'type': 'mysql',
  'host': process.env.MYSQL_HOST,
  'port': Number(process.env.MYSQL_PORT),
  'username': process.env.MYSQL_USER,
  'password': process.env.MYSQL_PASSWORD,
  'database': process.env.MYSQL_DATABASE,
  'synchronize': false,
  'logging': false,
  'entities': [
    'src/entity/**/*.ts',
  ],
  'migrations': [
    'src/migration/**/*.ts',
  ],
  'subscribers': [
    'src/subscriber/**/*.ts',
  ]
})
