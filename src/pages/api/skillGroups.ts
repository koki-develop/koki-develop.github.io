import {
  NextApiRequest,
  NextApiResponse,
} from 'next';
import config from '../../config';

const handler = (_req: NextApiRequest, res: NextApiResponse): void => {
  res.status(200).json(config.skillGroups);
};

export default handler;
