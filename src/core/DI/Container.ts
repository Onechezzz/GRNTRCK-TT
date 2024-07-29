type Constructor<T> = new (...args: unknown[]) => T;

class Container {
  private services = new Map<string, unknown>();

  register<T>(key: string, implementation: Constructor<T>): void {
    this.services.set(key, new implementation());
  }

  resolve<T>(key: string): T {
    const service = this.services.get(key);

    if (!service) {
      throw new Error(`Service not found: ${key}`);
    }
    return service as T;
  }
}

const container = new Container();
export default container;
