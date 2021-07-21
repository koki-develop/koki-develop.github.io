import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Social } from '../../domain';
import { ExternalLink } from '../../components';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    list: {
      display: 'flex',
      justifyContent: 'center',
    },
    listItem: {
      margin: theme.spacing(2),
    },
    img: {
      height: 40,
      width: 40,
    },
  }),
);

type Props = {
  items: Readonly<Social[]>;
};

const SocialList: React.VFC<Props> = (props: Props) => {
  const classes = useStyles();

  return (
    <ul className={classes.list}>
      {props.items.map(item => (
        <li key={item.name} className={classes.listItem}>
          <ExternalLink href={item.href}>
            <img className={classes.img} src={item.imgSrc} alt={item.name}/>
          </ExternalLink>
        </li>
      ))}
    </ul>
  );
};

export default SocialList;
