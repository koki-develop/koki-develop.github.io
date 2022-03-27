import { Config } from '@/types/config';
import { History } from '@/types/history';
import config from '@/config.json';

export class ConfigLoader {
  public static load(): Config {
    const histories: History[] = config.histories.map(history => {
      return { ...history, isActive: history.to === 'now' };
    });

    return {
      ...config,
      histories,
    } as Config;
  }
}
