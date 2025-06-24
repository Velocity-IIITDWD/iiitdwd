<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Static assets for IIIT Dharwad">
    <title><?= APP_NAME ?></title>
    <link rel="stylesheet" href="public/css/app.css">
</head>
<body>
    <div class="container">
        <!-- Header -->
        <header class="header">
            <div class="header-content">
                <h1><?= APP_NAME ?></h1>
                <p class="subtitle">Static files hosted at <?= str_replace(['https://', 'http://'], '', APP_URL) ?></p>
            </div>
            
            <?php if ($isAdmin): ?>
                <form method="post" style="display: inline;">
                    <input type="hidden" name="action" value="logout">
                    <button type="submit" class="admin-button">Logout</button>
                </form>
            <?php else: ?>
                <button class="admin-button" onclick="openLoginModal()">Admin</button>
            <?php endif; ?>
        </header>

        <!-- Alerts -->
        <div id="alertContainer">
            <?php if ($authError): ?>
                <div class="alert alert-error">
                    <?= htmlspecialchars($authError) ?>
                    <button class="alert-close" onclick="this.parentElement.remove()">&times;</button>
                </div>
            <?php endif; ?>
        </div>

        <!-- Main Content -->
        <?= $content ?>
    </div>

    <!-- Modals -->
    <?php include __DIR__ . '/modals.php'; ?>

    <script>
        // Pass configuration to JavaScript
        window.AssetsConfig = {
            isAdmin: <?= $isAdmin ? 'true' : 'false' ?>,
            csrfToken: '<?= $csrfToken ?>'
        };
    </script>
    <script src="public/js/app.js"></script>
</body>
</html> 