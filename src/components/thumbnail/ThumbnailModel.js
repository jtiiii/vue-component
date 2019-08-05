function Thumbnail({name = "none",src = "#",suffix = "none",size = 0,width = '160px',height = '160px'}){
    this.name = name;
    this.src = src;
    this.size = size;
    this.width = width;
    this.height = height;
    this.suffix = suffix;
}

Thumbnail.of = obj => obj instanceof Thumbnail? obj: new Thumbnail(obj);
export default Thumbnail;