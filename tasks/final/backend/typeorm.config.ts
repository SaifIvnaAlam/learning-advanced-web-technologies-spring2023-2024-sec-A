import { Admin } from 'src/admin/entities/admin.entity';
import { User } from 'src/user/entities/user.entity';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

const typeOrmconfig: PostgresConnectionOptions = {
  type: 'postgres',
  database: 'PMS',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'admin',
  entities: [Admin, User],
  synchronize: true,
};

export default typeOrmconfig;
