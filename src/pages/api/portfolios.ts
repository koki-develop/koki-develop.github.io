import {
  NextApiRequest,
  NextApiResponse,
} from 'next';
import config from '../../config';

const handler = (_req: NextApiRequest, res: NextApiResponse): void => {
  res.status(200).json(config.portfolios);
};

export default handler;
