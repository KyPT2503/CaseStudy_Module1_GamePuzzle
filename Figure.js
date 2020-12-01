class FigureStraightColumn
{
    constructor()
    {
        this.style=Math.floor(Math.random()*2);
        if(this.style==0)
        {
            this.coordsList=[[-4,5],[-3,5],[-2,5],[-1,5]];
        }
        else if(this.style==1)
        {
            this.coordsList=[[-1,3],[-1,4],[-1,5],[-1,6]];
        }
    }
    changeStyle()
    {
        if(this.style==0)
        {
            this.coordsList[0][0]+=1;
            this.coordsList[0][1]-=1;
            this.coordsList[2][0]-=1;
            this.coordsList[2][1]+=1;
            this.coordsList[3][0]-=2;
            this.coordsList[3][1]+=2;
            this.style=1;
        }
        else if(this.style==1)
        {
            this.coordsList[0][0]-=1;
            this.coordsList[0][1]+=1;
            this.coordsList[2][0]+=1;
            this.coordsList[2][1]-=1;
            this.coordsList[3][0]+=2;
            this.coordsList[3][1]-=2;
            this.style=0;
        }
        this.checkOverflow();
    }
    checkOverflow()
    {
        for(let i=0;i<this.coordsList.length;i++)
        {
            if(this.coordsList[i][1]<0)
            {
                let deviation = this.coordsList[i][1];
                {
                    for (let j = 0; j < this.coordsList.length; j++) {
                        this.coordsList[j][1] -= deviation;
                    }
                }
            }
            if(this.coordsList[i][1]>9)
            {
                let deviation = 9-this.coordsList[i][1];
                {
                    for (let j = 0; j < this.coordsList.length; j++) {
                        this.coordsList[j][1] += deviation;
                    }
                }
            }
        }
    }
    moveDown()
    {
        for(let i=0;i<this.coordsList.length;i++)
        {
            this.coordsList[i][0]+=1;
        }
    }
    moveLeft()
    {
        for(let i=0;i<this.coordsList.length;i++)
        {
            if(this.coordsList[i][1]==0) return;
        }
        for(let i=0;i<this.coordsList.length;i++)
        {
            this.coordsList[i][1]-=1;
            if(this.coordsList[i][1]<0) this.coordsList[i][1]+=1;
        }
    }
    moveRight()
    {
        for(let i=0;i<this.coordsList.length;i++)
        {
            if(this.coordsList[i][1]==9) return;
        }
        for(let i=0;i<this.coordsList.length;i++)
        {
            this.coordsList[i][1]+=1;
            if(this.coordsList[i][1]>19) this.coordsList[i][1]-=1;
        }
    }
}

class FigureSquare
{
    constructor()
    {
        this.coordsList=[[-2,4],[-2,5],[-1,4],[-1,5]];
        this.style=0;
    }
    changeStyle()
    {
        //do nothing
    }
    moveDown()
    {
        for(let i=0;i<this.coordsList.length;i++)
        {
            this.coordsList[i][0]+=1;
        }
    }
    moveLeft()
    {
        for(let i=0;i<this.coordsList.length;i++)
        {
            if(this.coordsList[i][1]==0) return;
        }
        for(let i=0;i<this.coordsList.length;i++)
        {
            this.coordsList[i][1]-=1;
            if(this.coordsList[i][1]<0) this.coordsList[i][1]+=1;
        }
    }
    moveRight()
    {
        for(let i=0;i<this.coordsList.length;i++)
        {
            if(this.coordsList[i][1]==9) return;
        }
        for(let i=0;i<this.coordsList.length;i++)
        {
            this.coordsList[i][1]+=1;
            if(this.coordsList[i][1]>19) this.coordsList[i][1]-=1;
        }
    }
}

class FigureArrow
{
    constructor()
    {
        this.style=Math.floor(Math.random()*4);
        if(this.style==0)
        {
            this.coordsList=[[-3,5],[-2,5],[-2,4],[-2,6]];
        }
        if(this.style==1)
        {
            this.coordsList=[[-3,5],[-2,5],[-2,4],[-1,5]];
        }
        if(this.style==2)
        {
            this.coordsList=[[-3,5],[-2,5],[-1,5],[-2,6]]
        }
        if(this.style==3)
        {
            this.coordsList=[[-1,5],[-2,5],[-2,4],[-2,6]]
        }
    }
    changeStyle()
    {
        if(this.style==0)
        {
            this.style=1;
            this.coordsList[0]=[this.coordsList[1][0],this.coordsList[1][1]-1];
            this.coordsList[2]=[this.coordsList[1][0]+1,this.coordsList[1][1]];
            this.coordsList[3]=[this.coordsList[1][0]-1,this.coordsList[1][1]]
        }
        else if(this.style==1)
        {
            this.style=2;
            this.coordsList[3]=[this.coordsList[1][0],this.coordsList[1][1]-1];
            this.coordsList[0]=[this.coordsList[1][0]+1,this.coordsList[1][1]];
            this.coordsList[2]=[this.coordsList[1][0],this.coordsList[1][1]+1];
        }
        else if(this.style==2)
        {
            this.style=3;
            this.coordsList[0]=[this.coordsList[1][0],this.coordsList[1][1]+1];
            this.coordsList[2]=[this.coordsList[1][0]-1,this.coordsList[1][1]];
            this.coordsList[3]=[this.coordsList[1][0]+1,this.coordsList[1][1]];
        }
        else if(this.style==3)
        {
            this.style=0;
            this.coordsList[0]=[this.coordsList[1][0]-1,this.coordsList[1][1]];
            this.coordsList[2]=[this.coordsList[1][0],this.coordsList[1][1]-1];
            this.coordsList[3]=[this.coordsList[1][0],this.coordsList[1][1]+1];
        }
        this.checkOverflow();
    }
    checkOverflow()
    {
        for(let i=0;i<this.coordsList.length;i++)
        {
            if(this.coordsList[i][1]<0)
            {
                let deviation = this.coordsList[i][1];
                {
                    for (let j = 0; j < this.coordsList.length; j++) {
                        this.coordsList[j][1] -= deviation;
                    }
                }
            }
            if(this.coordsList[i][1]>9)
            {
                let deviation = 9-this.coordsList[i][1];
                {
                    for (let j = 0; j < this.coordsList.length; j++) {
                        this.coordsList[j][1] += deviation;
                    }
                }
            }
        }
    }
    moveDown()
    {
        for(let i=0;i<this.coordsList.length;i++)
        {
            this.coordsList[i][0]+=1;
        }
    }
    moveLeft()
    {
        for(let i=0;i<this.coordsList.length;i++)
        {
            if(this.coordsList[i][1]==0) return;
        }
        for(let i=0;i<this.coordsList.length;i++)
        {
            this.coordsList[i][1]-=1;
            if(this.coordsList[i][1]<0) this.coordsList[i][1]+=1;
        }
    }
    moveRight()
    {
        for(let i=0;i<this.coordsList.length;i++)
        {
            if(this.coordsList[i][1]==9) return;
        }
        for(let i=0;i<this.coordsList.length;i++)
        {
            this.coordsList[i][1]+=1;
            if(this.coordsList[i][1]>19) this.coordsList[i][1]-=1;
        }
    }

}

class FigureL
{
    constructor()
    {
        this.style=Math.floor(Math.random()*4);
        if(this.style==0)
        {
            this.coordsList=[[-3,4],[-2,4],[-1,4],[-1,5]];
        }
        else if(this.style==1)
        {
            this.coordsList=[[-1,4],[-1,5],[-1,6],[-2,6]];
        }
        else if(this.style==2)
        {
            this.coordsList=[[-1,5],[-2,5],[-3,5],[-3,4]];
        }
        else if(this.style==3)
        {
            this.coordsList=[[-2,6],[-2,5],[-2,4],[-1,4]];
        }
    }
    changeStyle()
    {
        if(this.style==0)
        {
            this.style=1;
            this.coordsList[0]=[this.coordsList[1][0],this.coordsList[1][1]-1];
            this.coordsList[2]=[this.coordsList[1][0],this.coordsList[1][1]+1];
            this.coordsList[3]=[this.coordsList[1][0]-1,this.coordsList[1][1]+1];
        }
        else if(this.style==1)
        {
            this.style=2;
            this.coordsList[0]=[this.coordsList[1][0]+1,this.coordsList[1][1]];
            this.coordsList[2]=[this.coordsList[1][0]-1,this.coordsList[1][1]];
            this.coordsList[3]=[this.coordsList[1][0]-1,this.coordsList[1][1]-1];
        }
        else if(this.style==2)
        {
            this.style=3;
            this.coordsList[0]=[this.coordsList[1][0],this.coordsList[1][1]+1];
            this.coordsList[2]=[this.coordsList[1][0],this.coordsList[1][1]-1];
            this.coordsList[3]=[this.coordsList[1][0]+1,this.coordsList[1][1]-1];
        }
        else if(this.style==3)
        {
            this.style=0;
            this.coordsList[0]=[this.coordsList[1][0]-1,this.coordsList[1][1]];
            this.coordsList[2]=[this.coordsList[1][0]+1,this.coordsList[1][1]];
            this.coordsList[3]=[this.coordsList[1][0]+1,this.coordsList[1][1]+1];
        }
        this.checkOverflow();
    }
    checkOverflow()
    {
        for(let i=0;i<this.coordsList.length;i++)
        {
            if(this.coordsList[i][1]<0)
            {
                let deviation = this.coordsList[i][1];
                {
                    for (let j = 0; j < this.coordsList.length; j++) {
                        this.coordsList[j][1] -= deviation;
                    }
                }
            }
            if(this.coordsList[i][1]>9)
            {
                let deviation = 9-this.coordsList[i][1];
                {
                    for (let j = 0; j < this.coordsList.length; j++) {
                        this.coordsList[j][1] += deviation;
                    }
                }
            }
        }
    }
    moveDown()
    {
        for(let i=0;i<this.coordsList.length;i++)
        {
            this.coordsList[i][0]+=1;
        }
    }
    moveLeft()
    {
        for(let i=0;i<this.coordsList.length;i++)
        {
            if(this.coordsList[i][1]==0) return;
        }
        for(let i=0;i<this.coordsList.length;i++)
        {
            this.coordsList[i][1]-=1;
            if(this.coordsList[i][1]<0) this.coordsList[i][1]+=1;
        }
    }
    moveRight()
    {
        for(let i=0;i<this.coordsList.length;i++)
        {
            if(this.coordsList[i][1]==9) return;
        }
        for(let i=0;i<this.coordsList.length;i++)
        {
            this.coordsList[i][1]+=1;
            if(this.coordsList[i][1]>19) this.coordsList[i][1]-=1;
        }
    }
}
class FigureLReserve
{
    constructor()
    {
        this.style=Math.floor(Math.random()*4);
        if(this.style==0)
        {
            this.coordsList=[[-3,5],[-2,5],[-1,5],[-1,4]];
        }
        else if(this.style==1)
        {
            this.coordsList=[[-2,4],[-2,5],[-2,6],[-1,6]];
        }
        else if(this.style==2)
        {
            this.coordsList=[[-1,5],[-2,5],[-3,5],[-3,6]];
        }
        else if(this.style==3)
        {
            this.coordsList=[[-1,6],[-1,5],[-1,4],[-2,4]];
        }
    }
    changeStyle()
    {
        if(this.style==0)
        {
            this.style=1;
            this.coordsList[0]=[this.coordsList[1][0],this.coordsList[1][1]-1];
            this.coordsList[2]=[this.coordsList[1][0],this.coordsList[1][1]+1];
            this.coordsList[3]=[this.coordsList[1][0]+1,this.coordsList[1][1]+1];
        }
        else if(this.style==1)
        {
            this.style=2;
            this.coordsList[0]=[this.coordsList[1][0]+1,this.coordsList[1][1]];
            this.coordsList[2]=[this.coordsList[1][0]-1,this.coordsList[1][1]];
            this.coordsList[3]=[this.coordsList[1][0]-1,this.coordsList[1][1]+1];
        }
        else if(this.style==2)
        {
            this.style=3;
            this.coordsList[0]=[this.coordsList[1][0],this.coordsList[1][1]+1];
            this.coordsList[2]=[this.coordsList[1][0],this.coordsList[1][1]-1];
            this.coordsList[3]=[this.coordsList[1][0]-1,this.coordsList[1][1]-1];
        }
        else if(this.style==3)
        {
            this.style=0;
            this.coordsList[0]=[this.coordsList[1][0]-1,this.coordsList[1][1]];
            this.coordsList[2]=[this.coordsList[1][0]+1,this.coordsList[1][1]];
            this.coordsList[3]=[this.coordsList[1][0]+1,this.coordsList[1][1]-1];
        }
        this.checkOverflow();
    }
    checkOverflow()
    {
        for(let i=0;i<this.coordsList.length;i++)
        {
            if(this.coordsList[i][1]<0)
            {
                let deviation = this.coordsList[i][1];
                {
                    for (let j = 0; j < this.coordsList.length; j++) {
                        this.coordsList[j][1] -= deviation;
                    }
                }
            }
            if(this.coordsList[i][1]>9)
            {
                let deviation = 9-this.coordsList[i][1];
                {
                    for (let j = 0; j < this.coordsList.length; j++) {
                        this.coordsList[j][1] += deviation;
                    }
                }
            }
        }
    }
    moveDown()
    {
        for(let i=0;i<this.coordsList.length;i++)
        {
            this.coordsList[i][0]+=1;
        }
    }
    moveLeft()
    {
        for(let i=0;i<this.coordsList.length;i++)
        {
            if(this.coordsList[i][1]==0) return;
        }
        for(let i=0;i<this.coordsList.length;i++)
        {
            this.coordsList[i][1]-=1;
            if(this.coordsList[i][1]<0) this.coordsList[i][1]+=1;
        }
    }
    moveRight()
    {
        for(let i=0;i<this.coordsList.length;i++)
        {
            if(this.coordsList[i][1]==9) return;
        }
        for(let i=0;i<this.coordsList.length;i++)
        {
            this.coordsList[i][1]+=1;
            if(this.coordsList[i][1]>19) this.coordsList[i][1]-=1;
        }
    }
}
class FigureN
{
    constructor()
    {
        this.style=Math.floor(Math.random()*4);
        if(this.style==0)
        {
            this.coordsList=[[-3,4],[-2,4],[-2,5],[-1,5]];
        }
        else if(this.style==1)
        {
            this.coordsList=[[-1,3],[-1,4],[-2,4],[-2,5]];
        }
        else if(this.style==2)
        {
            this.coordsList=[[-1,5],[-2,5],[-2,4],[-3,4]];
        }
        else if(this.style==3)
        {
            this.coordsList=[[-2,5],[-2,4],[-1,4],[-1,3]];
        }
    }
    changeStyle()
    {
        if(this.style==0)
        {
            this.style=1;
            this.coordsList[0]=[this.coordsList[2][0]+1,this.coordsList[2][1]-1];
            this.coordsList[1]=[this.coordsList[2][0]+1,this.coordsList[2][1]];
            this.coordsList[3]=[this.coordsList[2][0],this.coordsList[2][1]+1];
        }
        else if(this.style==1)
        {
            this.style=2;
            this.coordsList[0]=[this.coordsList[2][0]+1,this.coordsList[2][1]+1];
            this.coordsList[1]=[this.coordsList[2][0],this.coordsList[2][1]+1];
            this.coordsList[3]=[this.coordsList[2][0]-1,this.coordsList[2][1]];
        }
        else if(this.style==2)
        {
            this.style=3;
            this.coordsList[0]=[this.coordsList[2][0]-1,this.coordsList[2][1]+1];
            this.coordsList[1]=[this.coordsList[2][0]-1,this.coordsList[2][1]];
            this.coordsList[3]=[this.coordsList[2][0],this.coordsList[2][1]-1];
        }
        else if(this.style==3)
        {
            this.style=0;
            this.coordsList[0]=[this.coordsList[2][0]-1,this.coordsList[2][1]-1];
            this.coordsList[1]=[this.coordsList[2][0],this.coordsList[2][1]-1];
            this.coordsList[3]=[this.coordsList[2][0]+1,this.coordsList[2][1]];
        }
        this.checkOverflow();
    }
    checkOverflow()
    {
        for(let i=0;i<this.coordsList.length;i++)
        {
            if(this.coordsList[i][1]<0)
            {
                let deviation = this.coordsList[i][1];
                {
                    for (let j = 0; j < this.coordsList.length; j++) {
                        this.coordsList[j][1] -= deviation;
                    }
                }
            }
            if(this.coordsList[i][1]>9)
            {
                let deviation = 9-this.coordsList[i][1];
                {
                    for (let j = 0; j < this.coordsList.length; j++) {
                        this.coordsList[j][1] += deviation;
                    }
                }
            }
        }
    }
    moveDown()
    {
        for(let i=0;i<this.coordsList.length;i++)
        {
            this.coordsList[i][0]+=1;
        }
    }
    moveLeft()
    {
        for(let i=0;i<this.coordsList.length;i++)
        {
            if(this.coordsList[i][1]==0) return;
        }
        for(let i=0;i<this.coordsList.length;i++)
        {
            this.coordsList[i][1]-=1;
            if(this.coordsList[i][1]<0) this.coordsList[i][1]+=1;
        }
    }
    moveRight()
    {
        for(let i=0;i<this.coordsList.length;i++)
        {
            if(this.coordsList[i][1]==9) return;
        }
        for(let i=0;i<this.coordsList.length;i++)
        {
            this.coordsList[i][1]+=1;
            if(this.coordsList[i][1]>19) this.coordsList[i][1]-=1;
        }
    }
}
class FigureNReserve
{
    constructor()
    {
        this.style=Math.floor(Math.random()*4);
        if(this.style==0)
        {
            this.coordsList=[[-3,4],[-2,4],[-2,5],[-1,5]];
        }
        else if(this.style==1)
        {
            this.coordsList=[[-1,3],[-1,4],[-2,4],[-2,5]];
        }
        else if(this.style==2)
        {
            this.coordsList=[[-1,5],[-2,5],[-2,4],[-3,4]];
        }
        else if(this.style==3)
        {
            this.coordsList=[[-2,5],[-2,4],[-1,4],[-1,3]];
        }
    }
    changeStyle()
    {
        if(this.style==0)
        {
            this.style=1;
            this.coordsList[0]=[this.coordsList[2][0]-1,this.coordsList[2][1]-1];
            this.coordsList[1]=[this.coordsList[2][0]-1,this.coordsList[2][1]];
            this.coordsList[3]=[this.coordsList[2][0],this.coordsList[2][1]+1];
        }
        else if(this.style==1)
        {
            this.style=2;
            this.coordsList[0]=[this.coordsList[2][0]+1,this.coordsList[2][1]-1];
            this.coordsList[1]=[this.coordsList[2][0],this.coordsList[2][1]-1];
            this.coordsList[3]=[this.coordsList[2][0]-1,this.coordsList[2][1]];
        }
        else if(this.style==2)
        {
            this.style=3;
            this.coordsList[0]=[this.coordsList[2][0]+1,this.coordsList[2][1]+1];
            this.coordsList[1]=[this.coordsList[2][0]+1,this.coordsList[2][1]];
            this.coordsList[3]=[this.coordsList[2][0],this.coordsList[2][1]-1];
        }
        else if(this.style==3)
        {
            this.style=0;
            this.coordsList[0]=[this.coordsList[2][0]-1,this.coordsList[2][1]+1];
            this.coordsList[1]=[this.coordsList[2][0],this.coordsList[2][1]+1];
            this.coordsList[3]=[this.coordsList[2][0]+1,this.coordsList[2][1]];
        }
        this.checkOverflow();
    }
    checkOverflow()
    {
        for(let i=0;i<this.coordsList.length;i++)
        {
            if(this.coordsList[i][1]<0)
            {
                let deviation = this.coordsList[i][1];
                {
                    for (let j = 0; j < this.coordsList.length; j++) {
                        this.coordsList[j][1] -= deviation;
                    }
                }
            }
            if(this.coordsList[i][1]>9)
            {
                let deviation = 9-this.coordsList[i][1];
                {
                    for (let j = 0; j < this.coordsList.length; j++) {
                        this.coordsList[j][1] += deviation;
                    }
                }
            }
        }
    }
    moveDown()
    {
        for(let i=0;i<this.coordsList.length;i++)
        {
            this.coordsList[i][0]+=1;
        }
    }
    moveLeft()
    {
        for(let i=0;i<this.coordsList.length;i++)
        {
            if(this.coordsList[i][1]==0) return;
        }
        for(let i=0;i<this.coordsList.length;i++)
        {
            this.coordsList[i][1]-=1;
            if(this.coordsList[i][1]<0) this.coordsList[i][1]+=1;
        }
    }
    moveRight()
    {
        for(let i=0;i<this.coordsList.length;i++)
        {
            if(this.coordsList[i][1]==9) return;
        }
        for(let i=0;i<this.coordsList.length;i++)
        {
            this.coordsList[i][1]+=1;
            if(this.coordsList[i][1]>19) this.coordsList[i][1]-=1;
        }
    }
}