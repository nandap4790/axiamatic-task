import { GithubIcon } from "./icons/github";
import { GitlabIcon } from "./icons/gitlab";
import { JiraIcon } from "./icons/jira";
import { NotionIcon } from "./icons/notion";
import { SlackIcon } from "./icons/slack";

export const data = [
    {
      id: 1,
      logo: '',
      value: 'notion',
      label: <div className="icon-content"><span><NotionIcon /></span><span className="software-option">Notion</span></div>
    },
    {
      id: 2,
      logo: '',
      value: 'slack',
      label: <div className="icon-content"><span><SlackIcon /></span><span className="software-option">Slack</span></div>
    },
    {
      id: 3,
      logo: '',
      value: 'jira',
      label: <div className="icon-content"><span><JiraIcon /></span><span className="software-option">Jira</span></div>
    },
    {
      id: 4,
      logo: '',
      value: 'github',
      label: <div className="icon-content"><span><GithubIcon /></span><span className="software-option">Github</span></div>
    },
    {
      id: 5,
      logo: '',
      value: 'gitLab',
      label: <div className="icon-content"><span><GitlabIcon /></span><span className="software-option">Gitlab</span></div>
    },
];