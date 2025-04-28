interface BlogCardProps {
  title: string;
  date: string;
  image: string;
  description: string;
  link: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  title,
  date,
  image,
  description,
  link,
}) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md m-4 w-100">
      <img className="w-full h-52 object-cover" src={image} alt={title} />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-sm text-gray-500 mb-2">{date}</p>
        <a href={link} className="text-primary/90 hover:text-primary text-sm">
          {description}
        </a>
      </div>
    </div>
  );
};

export default BlogCard;