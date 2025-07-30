/**
 * TypeScript Readonly Benefits in Enterprise Applications
 * 
 * This file demonstrates the practical benefits of using readonly modifiers
 * in large-scale enterprise applications with real-world examples.
 */

console.log("=== TypeScript Readonly Benefits in Enterprise Applications ===\n");

// ==========================================
// 1. DATA INTEGRITY & IMMUTABILITY
// ==========================================

console.log("1. 🔒 DATA INTEGRITY & IMMUTABILITY");

// Database Configuration Protection
interface DatabaseConfig {
  readonly host: string;
  readonly port: number;
  readonly database: string;
  readonly ssl: boolean;
}

const prodConfig: DatabaseConfig = {
  host: "prod-db.company.com",
  port: 5432,
  database: "main_app",
  ssl: true
};

console.log("✅ Production Config:", prodConfig);
// prodConfig.host = "test-db.company.com"; // ❌ Compile-time error
console.log("❌ Cannot modify production config accidentally\n");

// Financial Transaction Protection
interface Transaction {
  readonly id: string;
  readonly amount: number;
  readonly timestamp: Date;
  readonly accountId: string;
  readonly type: 'debit' | 'credit';
}

const payment: Transaction = {
  id: "txn_123456789",
  amount: 1500.00,
  timestamp: new Date(),
  accountId: "acc_987654321",
  type: 'debit'
};

console.log("💰 Financial Transaction:", payment);
// payment.amount = 2000.00; // ❌ Prevents fraud/accidental modification
console.log("❌ Transaction amount cannot be modified after creation\n");

// ==========================================
// 2. THREAD SAFETY & CONCURRENCY
// ==========================================

console.log("2. 🧵 THREAD SAFETY & CONCURRENCY");

class CacheEntry {
  constructor(
    public readonly key: string,
    public readonly value: any,
    public readonly expiresAt: Date,
    public readonly ttl: number
  ) {}

  isExpired(): boolean {
    return new Date() > this.expiresAt;
  }
}

const cacheEntry = new CacheEntry(
  "user:123",
  { name: "John Doe", email: "john@company.com" },
  new Date(Date.now() + 300000), // 5 minutes from now
  300
);

console.log("🗄️  Cache Entry:", {
  key: cacheEntry.key,
  isExpired: cacheEntry.isExpired()
});
console.log("✅ Multiple threads can safely read cache entries\n");

// ==========================================
// 3. ARCHITECTURE BENEFITS
// ==========================================

console.log("3. 🏗️ ARCHITECTURE BENEFITS");

// API Response Models
interface UserProfile {
  readonly userId: string;
  readonly email: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly createdAt: Date;
  readonly permissions: readonly string[];
  readonly department: {
    readonly id: string;
    readonly name: string;
  };
}

const userProfile: UserProfile = {
  userId: "usr_abc123",
  email: "jane.smith@company.com",
  firstName: "Jane",
  lastName: "Smith",
  createdAt: new Date("2023-01-15"),
  permissions: ["read:documents", "write:reports", "admin:users"],
  department: {
    id: "dept_hr001",
    name: "Human Resources"
  }
};

console.log("👤 User Profile:", {
  name: `${userProfile.firstName} ${userProfile.lastName}`,
  department: userProfile.department.name,
  permissionCount: userProfile.permissions.length
});
console.log("✅ API responses cannot be accidentally modified\n");

// Feature Flags Configuration
class FeatureFlags {
  constructor(
    public readonly enableNewDashboard: boolean,
    public readonly maxUploadSize: number,
    public readonly allowedFileTypes: readonly string[],
    public readonly apiRateLimit: number,
    public readonly maintenanceMode: boolean
  ) {}

  canUploadFile(size: number, type: string): boolean {
    return size <= this.maxUploadSize && 
           this.allowedFileTypes.includes(type) &&
           !this.maintenanceMode;
  }
}

const prodFeatures = new FeatureFlags(
  true,
  10485760, // 10MB
  ["pdf", "docx", "xlsx", "png", "jpg"],
  1000, // requests per hour
  false
);

console.log("🚩 Feature Flags:", {
  newDashboard: prodFeatures.enableNewDashboard,
  canUploadPDF: prodFeatures.canUploadFile(5000000, "pdf"),
  maintenance: prodFeatures.maintenanceMode
});
console.log("✅ Feature flags remain stable across environments\n");

// ==========================================
// 4. BUG PREVENTION
// ==========================================

console.log("4. 🐛 BUG PREVENTION");

// Without readonly - Bug prone
interface OrderBugProne {
  orderId: string;
  customerId: string;
  total: number;
  items: string[];
}

// With readonly - Bug prevention
interface SafeOrder {
  readonly orderId: string;
  readonly customerId: string;
  readonly total: number;
  readonly items: readonly string[];
}

function processOrder(order: SafeOrder): { order: SafeOrder; totalWithTax: number } {
  // Must create new object, preserving original
  const taxRate = 0.08;
  const totalWithTax = order.total * (1 + taxRate);
  
  console.log("📦 Processing Order:", {
    orderId: order.orderId,
    originalTotal: order.total,
    totalWithTax: totalWithTax.toFixed(2)
  });
  
  return {
    order, // Original order remains unchanged
    totalWithTax
  };
}

const customerOrder: SafeOrder = {
  orderId: "ORD-2024-001",
  customerId: "CUST-789",
  total: 299.99,
  items: ["laptop", "mouse", "keyboard"]
};

const processedOrder = processOrder(customerOrder);
console.log("✅ Original order preserved:", customerOrder.total);
console.log("✅ Tax calculation separate:", processedOrder.totalWithTax.toFixed(2), "\n");

// ==========================================
// 5. PERFORMANCE BENEFITS
// ==========================================

console.log("5. 🎯 PERFORMANCE BENEFITS");

class ExpensiveCalculation {
  constructor(
    public readonly input: readonly number[],
    public readonly algorithm: string,
    public readonly precision: number
  ) {}
  
  private _result?: number;
  
  calculate(): number {
    if (this._result === undefined) {
      console.log("💡 Performing expensive calculation (first time only)...");
      // Simulate expensive calculation
      this._result = this.input.reduce((sum, num) => sum + Math.pow(num, this.precision), 0);
    } else {
      console.log("⚡ Returning cached result...");
    }
    return this._result;
  }
}

const calculation = new ExpensiveCalculation([1, 2, 3, 4, 5], "polynomial", 3);

console.log("🧮 First calculation:", calculation.calculate());
console.log("🧮 Second calculation:", calculation.calculate());
console.log("✅ Safe to cache because inputs are readonly\n");

// ==========================================
// 6. ENTERPRISE PATTERNS
// ==========================================

console.log("6. 🔄 ENTERPRISE PATTERNS");

// Event Sourcing
interface DomainEvent {
  readonly eventId: string;
  readonly aggregateId: string;
  readonly eventType: string;
  readonly payload: readonly any[];
  readonly occurredAt: Date;
  readonly version: number;
}

const userRegisteredEvent: DomainEvent = {
  eventId: "evt_reg_001",
  aggregateId: "user_123",
  eventType: "UserRegistered",
  payload: ["jane.doe@company.com", "Jane", "Doe"],
  occurredAt: new Date(),
  version: 1
};

console.log("📅 Domain Event:", {
  type: userRegisteredEvent.eventType,
  aggregate: userRegisteredEvent.aggregateId,
  timestamp: userRegisteredEvent.occurredAt.toISOString()
});
console.log("✅ Events are immutable by design\n");

// Value Objects
class Money {
  constructor(
    public readonly amount: number,
    public readonly currency: string
  ) {
    if (amount < 0) throw new Error("Amount cannot be negative");
    if (!currency || currency.length !== 3) throw new Error("Invalid currency code");
  }
  
  add(other: Money): Money {
    if (this.currency !== other.currency) {
      throw new Error(`Currency mismatch: ${this.currency} vs ${other.currency}`);
    }
    return new Money(this.amount + other.amount, this.currency);
  }

  multiply(factor: number): Money {
    return new Money(this.amount * factor, this.currency);
  }

  toString(): string {
    return `${this.amount.toFixed(2)} ${this.currency}`;
  }
}

const price = new Money(29.99, "USD");
const tax = new Money(2.40, "USD");
const total = price.add(tax);

console.log("💵 Price calculation:");
console.log("   Price:", price.toString());
console.log("   Tax:", tax.toString());
console.log("   Total:", total.toString());
console.log("✅ Value objects are immutable\n");

// ==========================================
// 7. SECURITY BENEFITS
// ==========================================

console.log("7. 🛡️ SECURITY BENEFITS");

interface DatabaseQuery {
  readonly sql: string;
  readonly parameters: readonly any[];
  readonly queryId: string;
}

class QueryBuilder {
  static createUserQuery(userId: string): DatabaseQuery {
    return {
      sql: "SELECT * FROM users WHERE id = ? AND active = ?",
      parameters: [userId, true],
      queryId: `query_${Date.now()}`
    };
  }
}

const userQuery = QueryBuilder.createUserQuery("user_123");

console.log("🔍 Database Query:", {
  queryId: userQuery.queryId,
  sql: userQuery.sql,
  paramCount: userQuery.parameters.length
});
// userQuery.sql = "DROP TABLE users"; // ❌ Prevents SQL injection
console.log("✅ Query cannot be modified after creation\n");

// ==========================================
// 8. CODE DOCUMENTATION & CONTRACTS
// ==========================================

console.log("8. 📚 CODE DOCUMENTATION & CONTRACTS");

interface AuditLog {
  readonly timestamp: Date;
  readonly userId: string;
  readonly action: string;
  readonly resourceId: string;
  readonly ipAddress: string;
  readonly userAgent: string;
}

class AuditService {
  private logs: AuditLog[] = [];

  log(entry: Omit<AuditLog, 'timestamp'>): void {
    const auditEntry: AuditLog = {
      ...entry,
      timestamp: new Date()
    };
    this.logs.push(auditEntry);
    console.log("📝 Audit Log Created:", {
      action: auditEntry.action,
      user: auditEntry.userId,
      time: auditEntry.timestamp.toISOString()
    });
  }

  getLogs(): readonly AuditLog[] {
    return Object.freeze([...this.logs]);
  }
}

const auditService = new AuditService();
auditService.log({
  userId: "admin_001",
  action: "USER_CREATED",
  resourceId: "user_456",
  ipAddress: "192.168.1.100",
  userAgent: "Mozilla/5.0..."
});

console.log("✅ Audit logs are immutable for compliance\n");

// ==========================================
// 9. UTILITY TYPES FOR DEEP IMMUTABILITY
// ==========================================

console.log("9. 🔧 UTILITY TYPES FOR DEEP IMMUTABILITY");

type DeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends object ? DeepReadonly<T[P]> : T[P];
};

interface ComplexConfig {
  database: {
    host: string;
    port: number;
    credentials: {
      username: string;
      password: string;
    };
  };
  cache: {
    redis: {
      host: string;
      port: number;
    };
    ttl: number;
  };
}

type ReadonlyConfig = DeepReadonly<ComplexConfig>;

const appConfig: ReadonlyConfig = {
  database: {
    host: "db.company.com",
    port: 5432,
    credentials: {
      username: "app_user",
      password: "secure_password"
    }
  },
  cache: {
    redis: {
      host: "redis.company.com",
      port: 6379
    },
    ttl: 3600
  }
};

console.log("⚙️  Application Config:", {
  dbHost: appConfig.database.host,
  cacheHost: appConfig.cache.redis.host,
  cacheTTL: appConfig.cache.ttl
});
// appConfig.database.host = "test.com"; // ❌ Deep readonly protection
console.log("✅ Nested properties are also readonly\n");

// ==========================================
// 10. BEST PRACTICES SUMMARY
// ==========================================

console.log("10. 📋 BEST PRACTICES SUMMARY");

console.log(`
🎯 Use readonly for:
   ✓ IDs and primary keys
   ✓ Timestamps and audit fields  
   ✓ Configuration values
   ✓ API response models
   ✓ Domain events
   ✓ Value objects
   ✓ Financial data
   ✓ Security-sensitive data

🏆 Enterprise Benefits:
   ✓ Prevents accidental mutations
   ✓ Enables safe caching and memoization
   ✓ Improves thread safety
   ✓ Reduces debugging time
   ✓ Self-documenting code
   ✓ Enforces architectural patterns
   ✓ Enhances security
   ✓ Facilitates code reviews

⚡ Performance Benefits:
   ✓ Safe aggressive caching
   ✓ Reduced defensive copying
   ✓ Better compiler optimizations
   ✓ Predictable memory usage
`);

console.log("=== End of Readonly Benefits Demo ===");
