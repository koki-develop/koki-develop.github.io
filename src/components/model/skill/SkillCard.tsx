import React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import urlJoin from 'url-join';
import { Skill } from '@/types/skill';
import ExternalLink from '@/components/utils/ExternalLink';

const SkillImage = styled('img')(({ theme }) => ({
  height: 60,
  width: 60,
  marginBottom: theme.spacing(1),
  [theme.breakpoints.down('sm')]: {
    height: 40,
    marginBottom: theme.spacing(1),
    width: 40,
  },
}));

export type SkillCardProps = {
  skill: Skill;
};

const SkillCard: React.VFC<SkillCardProps> = React.memo(props => {
  const { skill } = props;

  return (
    <Grid key={skill.name} item xs={6} sm={4} md={3}>
      <ExternalLink href={skill.url}>
        <Card>
          <CardActionArea>
            <CardContent
              sx={{
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'column',
                p: {
                  xs: 1.5,
                  sm: 1.8,
                  md: 2,
                },
              }}
            >
              <SkillImage
                src={urlJoin('/images/icons', `${skill.name}.svg`)}
                alt={skill.name}
              />
              <Typography
                sx={{
                  fontSize: theme => theme.typography.body2.fontSize,
                  fontWeight: 'bold',
                  whiteSpace: 'pre',
                }}
              >
                {props.skill.name}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </ExternalLink>
    </Grid>
  );
});

SkillCard.displayName = 'SkillCard';

export default SkillCard;
