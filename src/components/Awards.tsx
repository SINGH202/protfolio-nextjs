import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import { config } from "../../data";

export const Awards = () => {
  return (
    <div>
      <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
        <EmojiEventsIcon className="text-accent !text-xl" />
        Awards & Certifications
      </h3>
      <div className="grid sm:grid-cols-2 gap-4">
        {config.awards.map((award) => (
          <div
            key={`${award.title}-${award.period}`}
            className="glass-card p-5 flex items-start gap-4 hover:border-accent/20 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
              <EmojiEventsIcon className="text-accent !text-lg" />
            </div>
            <div>
              <p className="font-medium text-white">{award.title}</p>
              <p className="text-sm text-gray-500 mt-0.5">{award.issuer}</p>
              <p className="font-mono text-xs text-gray-600 mt-1">{award.period}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
