import { VoterService } from './voter.service';
import { ISession } from '../../shared/event.model';

describe('VoterService', () => {
    let voterService:VoterService,
    mockHttp

    beforeEach(()=>{
        mockHttp = jasmine.createSpyObj('mockHttp',['post','get','delete'])
        voterService  = new VoterService(mockHttp);
    })

    describe('deleteVote', ()=>{
        it('should remove the voter from the list', ()=>{
            var session = { id: 6, voters:['joe','jhon'] };

            voterService.deleteVoter(3, <ISession>session, 'joe')
        })
    })

})