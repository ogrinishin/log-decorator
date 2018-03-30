# @TypeScript Log Decorator
A Node.js module that allow fast logging of class creation, methods and its arguments

## Installation
```sh
npm install ts-log-decorator --D
```

## Usage
### TypeScript

```typescript
import { log } from 'ts-log-decorator';
@log() class User {
    private: _name: string
    @log setUser(@log() name: string): string {
        this._name = name;
    }
};
```