import { Injectable } from '@nestjs/common';
import { InjectSlackClient, SlackClient } from 'nestjs-slack-listener';
import { LunchService } from '../lunch/lunch.service';

@Injectable()
export class SlackService {
  constructor(
    private readonly lunchService: LunchService,
    @InjectSlackClient() private readonly slackClient: SlackClient,
  ) {}
  async getLunchList(event: MessageEvent<any>) {
    console.log('✅', event);
    const lunchList = await this.lunchService.getLunchList();

    // await this.slackClient.chat.postMessage({
    //   text: '🙏 개발중입니다!',
    // });

    console.log('✅', lunchList);
  }
}
