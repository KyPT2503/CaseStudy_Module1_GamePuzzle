class Sticker
{
    constructor()
    {
        this.coordsList=[];
    }

    getIndex([x,y])
    {
        for(let i=0;i<this.coordsList.length;i++)
        {
            if(this.coordsList[i][0]==x && this.coordsList[i][1]==y)
            {
                return i;
            }
        }
        return -1;
    }
    removeRow(row)
    {
        let audio=new Audio('https://audio-previews.elements.envatousercontent.com/files/116837282/preview.mp3');
        audio.play();
        for(let i=0;i<10;i++)
        {
            this.coordsList.splice(this.getIndex([row,i]),1);
        }
        for(let i=0;i<this.coordsList.length;i++)
        {
            if(this.coordsList[i][0]<row) this.coordsList[i][0]+=1;
        }
        score+=10;
        displayScore();
    }
    checkRow()
    {
        for(let i=19;i>=0;i--)
        {
            let isFull=true;
            for(let j=0;j<10;j++)
            {
                if(this.getIndex([i,j])==-1) isFull=false;
            }
            if(isFull==true)
            {
                this.removeRow(i);
                i+=1;
            }
        }
    }
    append(coordsList_)
    {
        Array.prototype.push.apply(this.coordsList,coordsList_);
    }
}