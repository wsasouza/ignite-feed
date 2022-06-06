import styles from './Avatar.module.css';

export function Avatar({ hasBorder = true, src, alt }) {
  return (
    <div>
      <img
        className={hasBorder ? styles.avatarWithBorder : styles.avatar}
        src={src}
        alt={alt}
      />
    </div>
  );
}
