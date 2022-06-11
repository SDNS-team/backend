import { Injectable } from '@nestjs/common';
import { auth } from 'firebase-admin';
import { UserRecord } from 'firebase-admin/lib/auth/user-record';

@Injectable()
export class UserService {
  findMe(uid: string): Promise<UserRecord> {
    return auth().getUser(uid);
  }
}
