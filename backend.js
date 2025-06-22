// Triple Code Backend Logic (Simulated, replace with real backend as needed)

class UserDatabase {
  constructor() {
    this.users = {}; // username => {email, passwordHash}
  }

  hashPassword(password) {
    // Simple hash simulation (DO NOT USE IN PRODUCTION)
    let hash = 0;
    for (let i = 0; i < password.length; i++) {
      hash = (hash << 5) - hash + password.charCodeAt(i);
      hash |= 0; // Convert to 32bit integer
    }
    return hash.toString();
  }

  createUser(username, email, password) {
    if (this.users[username]) {
      return { success: false, message: "Username already exists" };
    }
    const passwordHash = this.hashPassword(password);
    this.users[username] = { email, passwordHash };
    return { success: true, message: "User created successfully" };
  }

  authenticate(username, password) {
    const user = this.users[username];
    if (!user) return false;
    return this.hashPassword(password) === user.passwordHash;
  }
}

const tripleCodeDB = new UserDatabase();

// Example usage
/*
const result = tripleCodeDB.createUser('arjun', 'arjun@example.com', 'MyPass123');
console.log(result);
const auth = tripleCodeDB.authenticate('arjun', 'MyPass123');
console.log('Authenticated:', auth);
*/
