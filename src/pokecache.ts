import { clearInterval } from "node:timers";


export type CacheEntry<T> = {
    createdAt: number;
    val: T;
};

export class Cache {
  #cache = new Map<string, CacheEntry<any>>();
  #reapIntervalId: NodeJS.Timeout | undefined = undefined;
  #interval: number;

  constructor(num: number){
    this.#interval = num
    this.#startReapLoop();
  }

    add<T>(key: string, val: T): void {
        const entry: CacheEntry<T> = {
            createdAt: Date.now(),
            val: val
        }
        this.#cache.set(key , entry)
    }
    get<T>(key: string): T | undefined {
        const searchEntry = this.#cache.get(key);
        if(searchEntry !== undefined){
            return searchEntry.val
        }
        else{
            return undefined
        }
    }
    #reap(){
        for (const [key, entry] of this.#cache) {
            if(Date.now() - entry.createdAt >= this.#interval)
                this.#cache.delete(key)
        }
    }
    #startReapLoop(){
       const id =  setInterval(() => {this.#reap();}, this.#interval);
       this.#reapIntervalId = id
    }
    stopReapLoop(){
        clearInterval(this.#reapIntervalId)
        this.#reapIntervalId = undefined
    }
}